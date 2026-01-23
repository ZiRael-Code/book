import { pool } from "../client.js";

/**
 * Get monthly aggregates for a user/account.
 * We treat:
 * - TOPUP: money IN to to_account_id
 * - TRANSFER: money OUT from from_account_id, money IN to to_account_id
 */
export async function getMonthlyTotals(input: {
  userId: string;
  accountId: string;
  from: string; // YYYY-MM-01
  to: string;   // next month YYYY-MM-01
}) {
  return pool.query(
    `
    with scoped as (
      select *
      from transactions
      where user_id = $1
        and ($2::uuid = from_account_id or $2::uuid = to_account_id)
        and created_at >= $3::timestamptz
        and created_at <  $4::timestamptz
        and status = 'COMPLETED'
    )
    select
      coalesce(sum(case
        when to_account_id = $2::uuid then amount
        else 0
      end), 0) as total_in,

      coalesce(sum(case
        when from_account_id = $2::uuid then amount
        else 0
      end), 0) as total_out,

      count(*)::int as tx_count
    from scoped
    `,
    [input.userId, input.accountId, input.from, input.to]
  );
}

export async function getAccountBalance(input: { userId: string; accountId: string }) {
  return pool.query(
    `select id, currency, balance
     from accounts
     where id = $1 and user_id = $2`,
    [input.accountId, input.userId]
  );
}

export async function listStatementTransactions(input: {
  userId: string;
  accountId: string;
  from: string;
  to: string;
}) {
  return pool.query(
    `
    select id, type, status, amount, currency, description,
           from_account_id, to_account_id, created_at
    from transactions
    where user_id = $1
      and ($2::uuid = from_account_id or $2::uuid = to_account_id)
      and created_at >= $3::timestamptz
      and created_at <  $4::timestamptz
      and status = 'COMPLETED'
      order by created_at asc, id asc
    `,
    [input.userId, input.accountId, input.from, input.to]
  );
}