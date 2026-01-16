import type { Handler } from "../types.js";
import { AppError } from "../lib/errors.js";
import { findUserById } from "../db/repositories/users.repo.js";

export function requireApproved(inner: Handler): Handler {
  return async (req, res, ctx) => {
    const userRes = await findUserById(ctx.user!.id);
    const u = userRes.rows[0];

    const approved = u.kyc_status === "APPROVED" && u.user_status === "ACTIVE";
    if (!approved) {
      throw new AppError(403, "KYC_REQUIRED", "Complete verification to continue");
    }

    await inner(req, res, ctx);
  };
}
