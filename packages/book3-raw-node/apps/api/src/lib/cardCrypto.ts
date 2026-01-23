import crypto from "node:crypto";
import { AppError } from "./errors.js";

function key(): Buffer {
  const b64 = process.env.CARD_DATA_KEY_B64;
  if (!b64) throw new AppError(500, "CONFIG_ERROR", "Missing CARD_DATA_KEY_B64");
  const k = Buffer.from(b64, "base64");
  if (k.length !== 32) throw new AppError(500, "CONFIG_ERROR", "CARD_DATA_KEY_B64 must be 32 bytes base64");
  return k;
}

export function encryptText(plain: string): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key(), iv);

  const ciphertext = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();

  // store as base64: iv.tag.ciphertext
  return Buffer.concat([iv, tag, ciphertext]).toString("base64");
}

export function decryptText(enc: string): string {
  const buf = Buffer.from(enc, "base64");
  const iv = buf.subarray(0, 12);
  const tag = buf.subarray(12, 28);
  const ciphertext = buf.subarray(28);

  const decipher = crypto.createDecipheriv("aes-256-gcm", key(), iv);
  decipher.setAuthTag(tag);

  const plain = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return plain.toString("utf8");
}
