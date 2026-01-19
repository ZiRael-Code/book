import type { Handler } from "../types.js";
import { readJsonBody } from "../lib/json.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { updateKycProfile, setKycStatus } from "../db/repositories/users.repo.js";
import { insertKycDocument } from "../db/repositories/kyc.repo.js";
import { computeOnboardingNext } from "../domain/auth/onboarding.js";
import { findUserById } from "../db/repositories/users.repo.js";

export const submitProfile: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);

  const dob = body.dob;
  const country = body.country;
  const address = body.address;
  const phone = body.phone;

  if (!dob || !country || !address || !phone) {
    throw new AppError(400, "VALIDATION_ERROR", "dob, country, address, phone are required");
  }

  const result = await updateKycProfile({
    userId: ctx.user!.id,
    dob,
    country,
    address,
    phone
  });

  const u = result.rows[0];
  sendJson(res, 200, {
    ok: true,
    onboarding: {
      next: computeOnboardingNext({ userStatus: u.user_status, kycStatus: u.kyc_status }),
      userStatus: u.user_status,
      kycStatus: u.kyc_status
    }
  });
};

export const submitDocument: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);

  const docType = body.docType;   // PASSPORT | DL | NIN
  const fileRef = body.fileRef;   // placeholder string for now

  if (!docType || !fileRef) throw new AppError(400, "VALIDATION_ERROR", "docType and fileRef are required");

  await insertKycDocument({ userId: ctx.user!.id, docType, fileRef });

  // mark as pending review
  await setKycStatus(ctx.user!.id, "PENDING_REVIEW");

  const userRes = await findUserById(ctx.user!.id);
  const u = userRes.rows[0];

  sendJson(res, 200, {
    ok: true,
    onboarding: {
      next: computeOnboardingNext({ userStatus: u.user_status, kycStatus: u.kyc_status }),
      userStatus: u.user_status,
      kycStatus: u.kyc_status
    }
  });
};

export const status: Handler = async (_req, res, ctx) => {
  const userRes = await findUserById(ctx.user!.id);
  const u = userRes.rows[0];

  sendJson(res, 200, {
    onboarding: {
      next: computeOnboardingNext({ userStatus: u.user_status, kycStatus: u.kyc_status }),
      userStatus: u.user_status,
      kycStatus: u.kyc_status
    }
  });
};
