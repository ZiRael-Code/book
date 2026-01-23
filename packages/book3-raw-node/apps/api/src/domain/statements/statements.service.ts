import { AppError } from "../../lib/errors.js";
import { monthRange } from "../../lib/month.js";
import { getAccountBalance, getMonthlyTotals, listStatementTransactions } from "../../db/repositories/statements.repo.js";

export async function getStatement(input: { userId: string; accountId: string; month: string }) {
  const { fromIso, toIso } = monthRange(input.month);

  const accRes = await getAccountBalance({ userId: input.userId, accountId: input.accountId });
  if (!accRes.rowCount) throw new AppError(404, "ACCOUNT_NOT_FOUND", "Account not found");

  const acc = accRes.rows[0];

  const totalsRes = await getMonthlyTotals({
    userId: input.userId,
    accountId: input.accountId,
    from: fromIso,
    to: toIso
  });

  const totals = totalsRes.rows[0];
  const totalIn = BigInt(totals.total_in);
  const totalOut = BigInt(totals.total_out);

  const closingBalance = BigInt(acc.balance);
  const net = totalIn - totalOut;
  const openingBalance = closingBalance - net;

  return {
    month: input.month,
    accountId: acc.id,
    currency: acc.currency,
    openingBalance: openingBalance.toString(),
    totalIn: totalIn.toString(),
    totalOut: totalOut.toString(),
    closingBalance: closingBalance.toString(),
    txCount: totals.tx_count
  };
}

export async function getStatementCsvRows(input: { userId: string; accountId: string; month: string }) {
  const { fromIso, toIso } = monthRange(input.month);

  const accRes = await getAccountBalance({ userId: input.userId, accountId: input.accountId });
  if (!accRes.rowCount) throw new AppError(404, "ACCOUNT_NOT_FOUND", "Account not found");
  const acc = accRes.rows[0];

  const txRes = await listStatementTransactions({
    userId: input.userId,
    accountId: input.accountId,
    from: fromIso,
    to: toIso
  });

  return {
    currency: acc.currency,
    rows: txRes.rows
  };
}
