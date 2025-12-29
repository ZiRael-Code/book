import type { ServerResponse } from "node:http";

export function sendJson(res: ServerResponse, status: number, body: unknown) {
  const json = JSON.stringify(body);
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(json);
}

export function sendError(res: ServerResponse, status: number, code: string, message: string) {
  return sendJson(res, status, { error: { code, message } });
}
