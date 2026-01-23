import { base64urlJson, hmacSha256 } from "../../lib/crypto.js";
import { AppError } from "../../lib/errors.js";

type JwtHeader = { alg: "HS256"; typ: "JWT" };
type JwtPayload = {
  sub: string;
  email?: string;
  sid?: string;     // session id (for refresh tokens)
  iat: number;
  exp: number;
};

function encode(header: JwtHeader, payload: JwtPayload, secret: string) {
  const h = base64urlJson(header);
  const p = base64urlJson(payload);
  const data = `${h}.${p}`;
  const sig = hmacSha256(data, secret);
  return `${data}.${sig}`;
}

function decodePart(part: string) {
  const normalized = part.replace(/-/g, "+").replace(/_/g, "/");
  const pad = normalized.length % 4 === 0 ? "" : "=".repeat(4 - (normalized.length % 4));
  const json = Buffer.from(normalized + pad, "base64").toString("utf8");
  return JSON.parse(json) as any;
}

export function signAccessToken(input: { userId: string; email: string }, secret: string, ttlSeconds: number) {
  const now = Math.floor(Date.now() / 1000);
  return encode(
    { alg: "HS256", typ: "JWT" },
    { sub: input.userId, email: input.email, iat: now, exp: now + ttlSeconds },
    secret,
  );
}

export function signRefreshToken(input: { userId: string; sessionId: string }, secret: string, ttlSeconds: number) {
  const now = Math.floor(Date.now() / 1000);
  return encode(
    { alg: "HS256", typ: "JWT" },
    { sub: input.userId, sid: input.sessionId, iat: now, exp: now + ttlSeconds },
    secret,
  );
}

export function verifyJwt(token: string, secret: string): JwtPayload {
  const parts = token.split(".");
  if (parts.length !== 3) throw new AppError(401, "INVALID_TOKEN", "Invalid token");

  const [h, p, sig] = parts;
  const data = `${h}.${p}`;
  const expected = hmacSha256(data, secret);
  if (sig !== expected) throw new AppError(401, "INVALID_TOKEN", "Invalid token");

  const payload = decodePart(p) as JwtPayload;
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp <= now) throw new AppError(401, "TOKEN_EXPIRED", "Token expired");
  return payload;
}
