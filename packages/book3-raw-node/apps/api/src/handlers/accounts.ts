import type { Handler } from "../types.js";
import { readJsonBody } from "../lib/json.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { createAccount, getAccountById, listAccounts } from "../db/repositories/accounts.repo.js";

export const create: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);
  const name = String(body?.name ?? "").trim();
  const currency = String(body?.currency ?? "").trim().toUpperCase();

  if (!name) throw new AppError(400, "VALIDATION_ERROR", "name is required");
  if (!currency) throw new AppError(400, "VALIDATION_ERROR", "currency is required");

  try {
    const result = await createAccount({ userId: ctx.user!.id, name, currency });
    sendJson(res, 201, { account: result.rows[0] });
  } catch (e: any) {
    if (e?.code === "23505") {
      throw new AppError(409, "ACCOUNT_EXISTS", `You already have a ${currency} account`);
    }
    throw e;
  }
};

export const list: Handler = async (_req, res, ctx) => {
  const result = await listAccounts(ctx.user!.id);
  sendJson(res, 200, { accounts: result.rows });
};

export const getById: Handler = async (_req, res, ctx) => {
  const accountId = ctx.params.id;
  if (!accountId) {
    throw new AppError(400, "VALIDATION_ERROR", "Missing account id");
  }
  const result = await getAccountById({ userId: ctx.user!.id, accountId });
  if (!result.rowCount) throw new AppError(404, "ACCOUNT_NOT_FOUND", "Account not found");
  sendJson(res, 200, { account: result.rows[0] });
};
