import type { Handler } from "../types.js";
import { sendError } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { logError } from "../lib/log.js";

export function withErrorHandling(inner: Handler): Handler {
  return async (req, res, ctx) => {
    try {
      await inner(req, res, ctx);
    } catch (e: any) {
      if (e?.message === "BODY_TOO_LARGE") return sendError(res, 413, "BODY_TOO_LARGE", "Payload too large");
      if (e?.message === "INVALID_JSON") return sendError(res, 400, "INVALID_JSON", "Invalid JSON body");
      if (e?.message === "EMPTY_BODY") return sendError(res, 400, "EMPTY_BODY", "Request body is required");

      if (e instanceof AppError) return sendError(res, e.status, e.code, e.message);

      logError("unhandled_error", { requestId: ctx.requestId, message: String(e?.message ?? e) });
      return sendError(res, 500, "INTERNAL", "Unexpected server error");
    }
  };
}
