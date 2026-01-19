import { AppError } from "./errors.js";

export function monthRange(month: string) {
  // month = "YYYY-MM"
  const m = /^(\d{4})-(\d{2})$/.exec(month);
  if (!m) throw new AppError(400, "INVALID_MONTH", "month must be YYYY-MM");

  const year = Number(m[1]);
  const mon = Number(m[2]); // 1..12
  if (mon < 1 || mon > 12) throw new AppError(400, "INVALID_MONTH", "month must be YYYY-MM");

  const from = new Date(Date.UTC(year, mon - 1, 1, 0, 0, 0));
  const to = new Date(Date.UTC(year, mon, 1, 0, 0, 0));

  return {
    fromIso: from.toISOString(),
    toIso: to.toISOString()
  };
}
