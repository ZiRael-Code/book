import type { Handler } from "../types.js";
import { readJsonBody } from "../lib/json.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { changePassword } from "../domain/security/password.service.js";

export const changePasswordHandler: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);

  const currentPassword = String(body?.currentPassword ?? "");
  const newPassword = String(body?.newPassword ?? "");

  if (!currentPassword) throw new AppError(400, "VALIDATION_ERROR", "currentPassword is required");
  if (!newPassword) throw new AppError(400, "VALIDATION_ERROR", "newPassword is required");

  await changePassword({ userId: ctx.user!.id, currentPassword, newPassword });

  sendJson(res, 200, { ok: true });
};
