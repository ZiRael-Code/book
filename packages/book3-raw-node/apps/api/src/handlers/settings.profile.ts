import type { Handler } from "../types.js";
import { sendJson } from "../lib/http.js";
import { readJsonBody } from "../lib/json.js";
import { AppError } from "../lib/errors.js";
import * as Repo from "../db/repositories/profile.repo.js";

export const get: Handler = async (_req, res, ctx) => {
  const result = await Repo.getProfile(ctx.user!.id);
  sendJson(res, 200, { profile: result.rows[0] });
};

export const patch: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);

  const fullName = body?.fullName !== undefined ? String(body.fullName).trim() : undefined;
  const phone = body?.phone !== undefined ? String(body.phone).trim() : undefined;
  const address = body?.address !== undefined ? String(body.address).trim() : undefined;
  const avatarUrl = body?.avatarUrl !== undefined ? String(body.avatarUrl).trim() : undefined;

  if (fullName !== undefined && !fullName) throw new AppError(400, "VALIDATION_ERROR", "fullName cannot be empty");

  const updated = await Repo.updateProfile({
    userId: ctx.user!.id,
    fullName,
    phone: phone ?? null,
    address: address ?? null,
    avatarUrl: avatarUrl ?? null
  });

  sendJson(res, 200, { profile: updated.rows[0] });
};
