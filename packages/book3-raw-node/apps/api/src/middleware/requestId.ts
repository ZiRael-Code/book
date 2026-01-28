import { randomUUID } from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { RequestContext } from "../types.js";

export function withRequestId(req: IncomingMessage, res: ServerResponse, ctx: RequestContext) {
  const id = req.headers["x-request-id"];
  ctx.requestId = typeof id === "string" ? id : randomUUID();
  res.setHeader("x-request-id", ctx.requestId);
}
