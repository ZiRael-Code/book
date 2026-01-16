import type { Handler } from "../types.js";
import { AppError } from "../lib/errors.js";
import { config } from "../lib/config.js";
import { verifyJwt } from "../domain/auth/tokens.js";
import { findUserById } from "../db/repositories/users.repo.js";

export function requireAuth(inner: Handler): Handler {
  return async (req, res, ctx) => {
    const h = req.headers.authorization;
    if (!h?.startsWith("Bearer ")) throw new AppError(401, "UNAUTHORIZED", "Missing bearer token");
    const token = h.slice("Bearer ".length);

    const payload = verifyJwt(token, config.JWT_ACCESS_SECRET);
    const userRes = await findUserById(payload.sub);
    if (!userRes.rowCount) throw new AppError(401, "UNAUTHORIZED", "User not found");

    const user = userRes.rows[0];
    ctx.user = { id: user.id, email: user.email, fullName: user.full_name };

    await inner(req, res, ctx);
  };
}
