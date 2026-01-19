import type { Handler } from "../types.js";
import { readJsonBody } from "../lib/json.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { getNotificationPrefs, setNotificationPrefs } from "../db/repositories/profile.repo.js";

function normalizePrefs(p: any) {
  const transfers = p?.transfers !== undefined ? Boolean(p.transfers) : true;
  const cards = p?.cards !== undefined ? Boolean(p.cards) : true;
  const kyc = p?.kyc !== undefined ? Boolean(p.kyc) : true;
  return { transfers, cards, kyc };
}

export const get: Handler = async (_req, res, ctx) => {
  const result = await getNotificationPrefs(ctx.user!.id);
  sendJson(res, 200, { notificationPrefs: result.rows[0]?.notification_prefs });
};

export const put: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);
  if (!body) throw new AppError(400, "VALIDATION_ERROR", "body required");

  const prefs = normalizePrefs(body);
  const updated = await setNotificationPrefs(ctx.user!.id, prefs);

  sendJson(res, 200, { notificationPrefs: updated.rows[0].notification_prefs });
};
