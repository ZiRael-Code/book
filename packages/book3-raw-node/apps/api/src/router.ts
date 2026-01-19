import type { IncomingMessage, ServerResponse } from "node:http";
import { URL } from "node:url";
import { routes } from "./routes.js";
import type { RequestContext } from "./types.js";
import { sendError } from "./lib/http.js";
import { applyCors } from "./middleware/cors.js";
import { withRequestId } from "./middleware/requestId.js";
import { withErrorHandling } from "./middleware/error.js";
import { withTiming } from "./middleware/timing.js";

function matchRoute(method: string, pathname: string) {
  for (const r of routes) {
    if (r.method !== method) continue;

    const m = r.pattern.exec({ pathname }); // ✅ FIX
    if (m) return { route: r, params: m.pathname.groups };
  }
  return null;
}

export async function handle(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);

  const ctx: RequestContext = {
    url,
    requestId: "",
    startedAt: Date.now(),
    ip: typeof req.socket.remoteAddress === "string" ? req.socket.remoteAddress : null,
    userAgent: typeof req.headers["user-agent"] === "string" ? req.headers["user-agent"] : null,
    params: {},
  };

  if (applyCors(req, res)) return;

  withRequestId(req, res, ctx);

  const wrapped = withErrorHandling(
    withTiming(async (req2, res2, ctx2) => {
      const method = req2.method ?? "GET";

    console.log("INCOMING", method, ctx2.url.pathname);

      const matched = matchRoute(method, ctx2.url.pathname); // ✅ FIX
      if (!matched) return sendError(res2, 404, "NOT_FOUND", "Route not found");

      ctx2.params = matched.params;
      await matched.route.handler(req2, res2, ctx2);
    })
  );

  await wrapped(req, res, ctx);
}
