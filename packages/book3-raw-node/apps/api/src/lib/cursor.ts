import { AppError } from "./errors.js";

export function encodeCursor(createdAt: string, id: string) {
  return Buffer.from(`${createdAt}|${id}`, "utf8").toString("base64url");
}

export function decodeCursor(cursor: string) {
  const raw = Buffer.from(cursor, "base64url").toString("utf8");
  const [createdAt, id] = raw.split("|");
  if (!createdAt || !id) throw new AppError(400, "INVALID_CURSOR", "Invalid cursor");
  return { createdAt, id };
}
