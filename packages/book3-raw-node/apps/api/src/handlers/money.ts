import type { Handler } from "../types.js";
import { readJsonBody } from "../lib/json.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import * as Money from "../domain/money/money.service.js";

function toBigIntAmount(v: any) {
  // For book simplicity: amountMinor is required (kobo/cents)
  const n = typeof v === "number" ? BigInt(Math.trunc(v)) : BigInt(String(v));
  return n;
}

export const topup: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);
  const accountId = String(body?.accountId ?? "");
  const idempotencyKey = String(body?.idempotencyKey ?? "");
  const amountMinor = body?.amountMinor;

  if (!accountId) throw new AppError(400, "VALIDATION_ERROR", "accountId is required");
  if (!idempotencyKey) throw new AppError(400, "VALIDATION_ERROR", "idempotencyKey is required");
  if (amountMinor === undefined) throw new AppError(400, "VALIDATION_ERROR", "amountMinor is required");

  const tx = await Money.topup({
    userId: ctx.user!.id,
    accountId,
    amount: toBigIntAmount(amountMinor),
    idempotencyKey,
    description: "Top up (simulated)"
  });

  sendJson(res, 201, { transaction: tx });
};

export const transfer: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);
  const fromAccountId = String(body?.fromAccountId ?? "");
  const toAccountId = String(body?.toAccountId ?? "");
  const idempotencyKey = String(body?.idempotencyKey ?? "");
  const amountMinor = body?.amountMinor;

  if (!fromAccountId) throw new AppError(400, "VALIDATION_ERROR", "fromAccountId is required");
  if (!toAccountId) throw new AppError(400, "VALIDATION_ERROR", "toAccountId is required");
  if (!idempotencyKey) throw new AppError(400, "VALIDATION_ERROR", "idempotencyKey is required");
  if (amountMinor === undefined) throw new AppError(400, "VALIDATION_ERROR", "amountMinor is required");

  const tx = await Money.transfer({
    userId: ctx.user!.id,
    fromAccountId,
    toAccountId,
    amount: toBigIntAmount(amountMinor),
    idempotencyKey,
    description: "Internal transfer"
  });

  sendJson(res, 201, { transaction: tx });
};
