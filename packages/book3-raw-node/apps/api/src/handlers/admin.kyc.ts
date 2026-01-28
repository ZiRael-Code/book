import type { Handler } from "../types.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { readJsonBody } from "../lib/json.js";
import * as Repo from "../db/repositories/adminKyc.repo.js";
import { insertNotification } from "../db/repositories/notifications.repo.js";
import { requireParam } from "../lib/params.js";

export const listPending: Handler = async (_req, res, ctx) => {
  const limitStr = ctx.url.searchParams.get("limit");
  const limit = limitStr ? Number(limitStr) : 50;

  const result = await Repo.listPendingKyc(Number.isFinite(limit) ? limit : 50);
  sendJson(res, 200, { users: result.rows });
};

export const getUser: Handler = async (_req, res, ctx) => {
  const userId = requireParam(ctx.params, "id");

  const userRes = await Repo.getKycUser(userId);
  if (!userRes.rowCount) throw new AppError(404, "USER_NOT_FOUND", "User not found");

  const docsRes = await Repo.getUserKycDocuments(userId);

  sendJson(res, 200, { user: userRes.rows[0], documents: docsRes.rows });
};

export const approve: Handler = async (_req, res, ctx) => {
  const userId = requireParam(ctx.params, "id");

  const updated = await Repo.approveKyc(userId);
  if (!updated.rowCount) throw new AppError(404, "USER_NOT_FOUND", "User not found");

  await insertNotification({
    userId,
    type: "KYC_APPROVED",
    title: "Verification approved",
    body: "Your Atop Bank account has been approved. You can now access your dashboard.",
    entityType: "kyc",
    entityId: null
  });

  sendJson(res, 200, { ok: true, user: updated.rows[0] });
};

export const reject: Handler = async (req, res, ctx) => {
  const userId = requireParam(ctx.params, "id");

  const body = await readJsonBody<any>(req);
  const reason = String(body?.reason ?? "").trim();
  if (!reason) throw new AppError(400, "VALIDATION_ERROR", "reason is required");

  const updated = await Repo.rejectKyc(userId, reason);
  if (!updated.rowCount) throw new AppError(404, "USER_NOT_FOUND", "User not found");

  await insertNotification({
    userId,
    type: "KYC_REJECTED",
    title: "Verification declined",
    body: `Your verification was declined: ${reason}`,
    entityType: "kyc",
    entityId: null
  });

  sendJson(res, 200, { ok: true, user: updated.rows[0] });
};
