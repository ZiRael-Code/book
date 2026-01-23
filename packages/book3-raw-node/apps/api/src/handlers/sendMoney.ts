import type { Handler } from "../types.js";
import { readJsonBody } from "../lib/json.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { sendMoney } from "../domain/money/sendMoney.service.js";

export const send: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);

  const fromAccountId = String(body?.fromAccountId ?? "");
  const payeeId = String(body?.payeeId ?? "");
  const idempotencyKey = String(body?.idempotencyKey ?? "");
  const amountMinor = body?.amountMinor;

  if (!fromAccountId) throw new AppError(400, "VALIDATION_ERROR", "fromAccountId is required");
  if (!payeeId) throw new AppError(400, "VALIDATION_ERROR", "payeeId is required");
  if (!idempotencyKey) throw new AppError(400, "VALIDATION_ERROR", "idempotencyKey is required");
  if (amountMinor === undefined) throw new AppError(400, "VALIDATION_ERROR", "amountMinor is required");

  const tx = await sendMoney({
    senderUserId: ctx.user!.id,
    fromAccountId,
    payeeId,
    amount: BigInt(amountMinor),
    idempotencyKey
  });

  sendJson(res, 201, { transaction: tx });
};
