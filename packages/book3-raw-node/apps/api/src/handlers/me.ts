import type { Handler } from "../types.js";
import { sendJson } from "../lib/http.js";
import { findUserById } from "../db/repositories/users.repo.js";
import { computeOnboardingNext } from "../domain/auth/onboarding.js";

export const me: Handler = async (_req, res, ctx) => {
  const userRes = await findUserById(ctx.user!.id);
  const user = userRes.rows[0];

  sendJson(res, 200, {
    user: { id: user.id, email: user.email, fullName: user.full_name },
    onboarding: {
      next: computeOnboardingNext({ userStatus: user.user_status, kycStatus: user.kyc_status }),
      userStatus: user.user_status,
      kycStatus: user.kyc_status
    }
  });
};
