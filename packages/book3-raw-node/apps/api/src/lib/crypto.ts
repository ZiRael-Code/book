import crypto from "node:crypto";

export function base64url(input: Buffer | string) {
  const buf = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return buf
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export function base64urlJson(obj: unknown) {
  return base64url(JSON.stringify(obj));
}

export function hmacSha256(data: string, secret: string) {
  return base64url(crypto.createHmac("sha256", secret).update(data).digest());
}

export function randomToken(bytes = 32) {
  return base64url(crypto.randomBytes(bytes));
}
