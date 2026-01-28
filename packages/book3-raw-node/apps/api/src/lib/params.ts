import { AppError } from "./errors.js";

export function requireParam(params: Record<string, string | undefined>, key: string): string {
  const value = params[key];
  if (!value) throw new AppError(400, "MISSING_PARAM", `Missing path param: ${key}`);
  return value;
}
