import type { Handler } from "../types.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { setKycStatus, setUserStatus } from "../db/repositories/users.repo.js";
import { insertNotification } from "../db/repositories/notifications.repo.js";


export const approveUser: Handler = async (_req, res, ctx) => {
  const userId = ctx.params.id;
  if (!userId) throw new AppError(400, "VALIDATION_ERROR", "Missing userId");

  await setKycStatus(userId, "APPROVED");
  await setUserStatus(userId, "ACTIVE");
  await insertNotification({
  userId,
  type: "KYC_APPROVED",
  title: "Verification approved",
  body: "Your Atop Bank account has been approved. You can now access your dashboard.",
  entityType: "kyc",
  entityId: null
});


  sendJson(res, 200, { ok: true });
};

export const rejectUser: Handler = async (_req, res, ctx) => {
  const userId = ctx.params.id;
  if (!userId) throw new AppError(400, "VALIDATION_ERROR", "Missing userId");

  await setKycStatus(userId, "REJECTED");
  await insertNotification({
  userId,
  type: "KYC_REJECTED",
  title: "Verification declined",
  body: "Your verification was declined. Please resubmit your documents.",
  entityType: "kyc",
  entityId: null
});

  sendJson(res, 200, { ok: true });
};
