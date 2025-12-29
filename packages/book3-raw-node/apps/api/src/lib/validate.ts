import { AppError } from "./errors.js";

export function requireString(v: unknown, field: string): string {
  if (typeof v !== "string" || !v.trim()) {
    throw new AppError(400, "VALIDATION_ERROR", `${field} is required`);
  }
  return v.trim();
}

export function requireEmail(v: unknown): string {
  const email = requireString(v, "email").toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new AppError(400, "INVALID_EMAIL", "Valid email is required");
  }
  return email;
}

export function requirePassword(v: unknown): string {
  const p = requireString(v, "password");
  if (p.length < 8) throw new AppError(400, "WEAK_PASSWORD", "Password must be at least 8 characters");
  return p;
}

export function requireBoolean(v: unknown, field: string): boolean {
  if (typeof v !== "boolean") throw new AppError(400, "VALIDATION_ERROR", `${field} must be a boolean`);
  return v;
}
