import type { Handler } from "../types.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { getTransactionById, listTransactions } from "../db/repositories/transactions.repo.js";

function decodeCursor(cursor: string): { createdAt: string; id: string } {
  const raw = Buffer.from(cursor, "base64url").toString("utf8");
  const [createdAt, id] = raw.split("|");
  if (!createdAt || !id) throw new AppError(400, "INVALID_CURSOR", "Invalid cursor");
  return { createdAt, id };
}

function encodeCursor(createdAt: string, id: string) {
  return Buffer.from(`${createdAt}|${id}`, "utf8").toString("base64url");
}

export const list: Handler = async (_req, res, ctx) => {
  const sp = ctx.url.searchParams;
  const accountId = sp.get("accountId") ?? undefined;
  const limit = Number(sp.get("limit") ?? "20");
  const cursor = sp.get("cursor");

  let cursorCreatedAt: string | null = null;
  let cursorId: string | null = null;

  if (cursor) {
    const decoded = decodeCursor(cursor);
    cursorCreatedAt = decoded.createdAt;
    cursorId = decoded.id;
  }

  const result = await listTransactions({
    userId: ctx.user!.id,
    accountId,
    limit,
    cursorCreatedAt,
    cursorId
  });

  const items = result.rows;
  const nextCursor =
    items.length === 0
      ? null
      : encodeCursor(items[items.length - 1].created_at, items[items.length - 1].id);

  sendJson(res, 200, { transactions: items, nextCursor });
};

export const getById: Handler = async (_req, res, ctx) => {
  const txId = ctx.params.id;
  if (!txId) {
    throw new AppError(400, "VALIDATION_ERROR", "Missing transaction id");
  }
  const result = await getTransactionById({ userId: ctx.user!.id, txId });
  if (!result.rowCount) throw new AppError(404, "TX_NOT_FOUND", "Transaction not found");
  sendJson(res, 200, { transaction: result.rows[0] });
};
