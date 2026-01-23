import type { Handler } from "../types.js";
import { sendJson } from "../lib/http.js";
import * as Statements from "../domain/statements/statements.service.js";
import { AppError } from "../lib/errors.js";

function requireParam(
  params: Record<string, string | undefined>,
  key: string
): string {
  const v = params[key];
  if (!v) throw new AppError(400, "VALIDATION_ERROR", `Missing path param: ${key}`);
  return v;
}

function csvEscape(v: any) {
  const s = String(v ?? "");
  if (/[,"\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export const getJson: Handler = async (_req, res, ctx) => {
  const accountId = requireParam(ctx.params, "accountId"); // ✅ now string
  const month = ctx.url.searchParams.get("month");
  if (!month) throw new AppError(400, "VALIDATION_ERROR", "month is required (YYYY-MM)");

  const statement = await Statements.getStatement({
    userId: ctx.user!.id,
    accountId,
    month
  });

  sendJson(res, 200, { statement });
};

export const getCsv: Handler = async (_req, res, ctx) => {
  const accountId = requireParam(ctx.params, "accountId"); // ✅ now string
  const month = ctx.url.searchParams.get("month");
  if (!month) throw new AppError(400, "VALIDATION_ERROR", "month is required (YYYY-MM)");

  const { currency, rows } = await Statements.getStatementCsvRows({
    userId: ctx.user!.id,
    accountId,
    month
  });

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename="statement-${accountId}-${month}.csv"`);

  res.write("id,createdAt,type,amountMinor,currency,direction,description\n");

  for (const r of rows) {
    const direction =
      r.to_account_id === accountId ? "IN" :
      r.from_account_id === accountId ? "OUT" :
      "NA";

    const line = [
      csvEscape(r.id),
      csvEscape(r.created_at),
      csvEscape(r.type),
      csvEscape(r.amount),
      csvEscape(currency),
      csvEscape(direction),
      csvEscape(r.description ?? "")
    ].join(",") + "\n";

    if (!res.write(line)) {
      await new Promise<void>((resolve) => res.once("drain", resolve));
    }
  }

  res.end();
};
