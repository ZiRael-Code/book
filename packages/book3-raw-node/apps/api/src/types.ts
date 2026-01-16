import type { IncomingMessage, ServerResponse } from "node:http";
import type { URL } from "node:url";

export type RequestContext = {
  url: URL;
  requestId: string;
  startedAt: number;
  ip: string | null;
  userAgent: string | null;
  params: Record<string, string | undefined>;
  user?: { id: string; email: string; fullName: string };
};

export type Handler = (
  req: IncomingMessage,
  res: ServerResponse,
  ctx: RequestContext
) => Promise<void>;
