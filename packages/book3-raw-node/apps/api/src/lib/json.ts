import type { IncomingMessage } from "node:http";

export async function readJsonBody<T>(req: IncomingMessage, maxBytes = 1_000_000): Promise<T> {
  let size = 0;
  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buf.length;
    if (size > maxBytes) throw new Error("BODY_TOO_LARGE");
    chunks.push(buf);
  }

  const text = Buffer.concat(chunks).toString("utf8").trim();
  if (!text) throw new Error("EMPTY_BODY");

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error("INVALID_JSON");
  }
}
