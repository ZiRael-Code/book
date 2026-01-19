import { pool } from "../client.js";

export async function insertTransaction(input: {
  userId: string;
  type: "TOPUP" | "TRANSFER";
  status: "COMPLETED" | "FAILED";
  amount: bigint;
  currency: string;
  description?: string | null;
  fromAccountId?: string | null;
  toAccountId?: string | null;
  idempotencyKey: string;
}) {
  return pool.query(
    `insert into transactions(
      user_id, type, status, amount, currency, description,
      from_account_id, to_account_id, idempotency_key
    )
    values ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    returning id, user_id, type, status, amount, currency, description,
              from_account_id, to_account_id, idempotency_key, created_at`,
    [
      input.userId,
      input.type,
      input.status,
      input.amount.toString(),
      input.currency,
      input.description ?? null,
      input.fromAccountId ?? null,
      input.toAccountId ?? null,
      input.idempotencyKey
    ]
  );
}

export async function findTxByIdempotencyKey(userId: string, key: string) {
  return pool.query(
    `select * from transactions where user_id = $1 and idempotency_key = $2`,
    [userId, key]
  );
}

export async function getTransactionById(input: { userId: string; txId: string }) {
  return pool.query(
    `select * from transactions where id = $1 and user_id = $2`,
    [input.txId, input.userId]
  );
}

/**
 * Cursor pagination: cursor = base64("timestamp|id")
 */
export async function listTransactions(input: {
  userId: string;
  accountId?: string;
  limit: number;
  cursorCreatedAt?: string | null;
  cursorId?: string | null;
}) {
  const limit = Math.min(Math.max(input.limit, 1), 50);

  const params: any[] = [input.userId, limit];
  let where = `where user_id = $1`;

  if (input.accountId) {
    params.push(input.accountId);
    where += ` and ($${params.length}::uuid = from_account_id or $${params.length}::uuid = to_account_id)`;
  }

  if (input.cursorCreatedAt && input.cursorId) {
    params.push(input.cursorCreatedAt);
    params.push(input.cursorId);
    where += ` and (created_at, id) < ($${params.length - 1}::timestamptz, $${params.length}::uuid)`;
  }

  const sql = `
    select *
    from transactions
    ${where}
    order by created_at desc, id desc
    limit $2
  `;

  return pool.query(sql, params);
}
