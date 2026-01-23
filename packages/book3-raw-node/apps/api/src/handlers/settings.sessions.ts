import type { Handler } from "../types.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { listSessions, revokeSessionById } from "../db/repositories/sessions.repo.js";

export const list: Handler = async (_req, res, ctx) => {
  const result = await listSessions(ctx.user!.id);
  sendJson(res, 200, { sessions: result.rows });
};

export const revoke: Handler = async (_req, res, ctx) => {
  const sessionId = ctx.params.id;

  if (!sessionId) {
    throw new AppError(400, "VALIDATION_ERROR", "sessionId is required");
  }

  const result = await revokeSessionById({ userId: ctx.user!.id, sessionId });

  if (!result.rowCount) {
    throw new AppError(404, "SESSION_NOT_FOUND", "Session not found or already revoked");
  }

  sendJson(res, 200, { ok: true });
};
