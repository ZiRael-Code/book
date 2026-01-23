import type { Handler } from "../types.js";
import { readJsonBody } from "../lib/json.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import * as Payees from "../domain/payees/payees.service.js";
import { requireParam } from "../lib/params.js";

export const create: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();

  if (!name) throw new AppError(400, "VALIDATION_ERROR", "name is required");
  if (!email) throw new AppError(400, "VALIDATION_ERROR", "email is required");

  const payee = await Payees.addInternalPayee({
    ownerUserId: ctx.user!.id,
    name,
    email
  });

  sendJson(res, 201, { payee });
};

export const list: Handler = async (_req, res, ctx) => {
  const q = ctx.url.searchParams.get("q") ?? undefined;
  const payees = await Payees.getMyPayees(ctx.user!.id, q);
  sendJson(res, 200, { payees });
};

export const getById: Handler = async (_req, res, ctx) => {
  const payeeId = requireParam(ctx.params, "id");
  const payee = await Payees.getMyPayee(ctx.user!.id, payeeId);
  sendJson(res, 200, { payee });
};

export const remove: Handler = async (_req, res, ctx) => {
  const payeeId = requireParam(ctx.params, "id");
  await Payees.removePayee(ctx.user!.id, payeeId);
  sendJson(res, 200, { ok: true });
};