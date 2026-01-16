import type { Handler } from "../types.js";
import { logInfo } from "../lib/log.js";

export function withTiming(inner: Handler): Handler {
  return async (req, res, ctx) => {
    await inner(req, res, ctx);
    const durationMs = Date.now() - ctx.startedAt;
    logInfo("request", {
      requestId: ctx.requestId,
      method: req.method,
      path: ctx.url.pathname,
      durationMs,
      statusCode: res.statusCode,
    });
  };
}
