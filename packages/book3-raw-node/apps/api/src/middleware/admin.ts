import type { Handler } from "../types.js";
import { AppError } from "../lib/errors.js";

export function requireAdmin(inner: Handler): Handler {
  return async (req, res, ctx) => {
    const key = req.headers["x-admin-key"];
    if (typeof key !== "string" || key !== process.env.ADMIN_API_KEY) {
      throw new AppError(401, "ADMIN_UNAUTHORIZED", "Invalid admin key");
    }
    await inner(req, res, ctx);
  };
}
