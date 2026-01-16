import { pool } from "../../db/client.js";
import { withTransaction } from "../../db/tx.js";
import { AppError } from "../../lib/errors.js";
import { findTxByIdempotencyKey, insertTransaction } from "../../db/repositories/transactions.repo.js";
import { insertNotification } from "../../db/repositories/notifications.repo.js";


function ensurePositive(amount: bigint) {
  if (amount <= 0n) throw new AppError(400, "INVALID_AMOUNT", "Amount must be greater than 0");
}
export async function topup(input: {
  userId: string;
  accountId: string;
  amount: bigint;
  idempotencyKey: string;
  description?: string;
}) {
  ensurePositive(input.amount);

  const existing = await findTxByIdempotencyKey(input.userId, input.idempotencyKey);
  if (existing.rowCount) return existing.rows[0]; // idempotent replay

  const client = await pool.connect();
  try {
    return await withTransaction(client, async () => {
      const accRes = await client.query(
        `select id, user_id, currency, balance
         from accounts
         where id = $1 and user_id = $2
         for update`,
        [input.accountId, input.userId]
      );
      if (!accRes.rowCount) throw new AppError(404, "ACCOUNT_NOT_FOUND", "Account not found");

      const acc = accRes.rows[0];
      const newBalance = BigInt(acc.balance) + input.amount;

      await client.query(`update accounts set balance = $1 where id = $2`, [
        newBalance.toString(),
        acc.id
      ]);

      const txRes = await client.query(
        `insert into transactions(user_id, type, status, amount, currency, description, to_account_id, idempotency_key)
         values ($1,'TOPUP','COMPLETED',$2,$3,$4,$5,$6)
         returning *`,
        [
          input.userId,
          input.amount.toString(),
          acc.currency,
          input.description ?? "Top up",
          acc.id,
          input.idempotencyKey
        ]
      );

      const tx = txRes.rows[0];

      // ✅ create in-app notification (same transaction, so it stays consistent)
      await client.query(
        `insert into notifications(user_id, type, title, body, entity_type, entity_id)
         values ($1,$2,$3,$4,$5,$6)`,
        [
          input.userId,
          "TOPUP",
          "Top up successful",
          `Your ${acc.currency} wallet was credited.`,
          "transaction",
          tx.id
        ]
      );

      return tx;
    });
  } finally {
    client.release();
  }
}

export async function transfer(input: {
  userId: string;
  fromAccountId: string;
  toAccountId: string;
  amount: bigint;
  idempotencyKey: string;
  description?: string;
}) {
  ensurePositive(input.amount);
  if (input.fromAccountId === input.toAccountId) throw new AppError(400, "INVALID_TRANSFER", "Cannot transfer to same account");

  const existing = await findTxByIdempotencyKey(input.userId, input.idempotencyKey);
  if (existing.rowCount) return existing.rows[0];

  const client = await pool.connect();
  try {
    return await withTransaction(client, async () => {
      // Lock accounts in a consistent order to avoid deadlocks
      const [a, b] = [input.fromAccountId, input.toAccountId].sort();

      const locked = await client.query(
        `select id, user_id, currency, balance
         from accounts
         where id in ($1, $2)
         for update`,
        [a, b]
      );

      const from = locked.rows.find((r: any) => r.id === input.fromAccountId);
      const to = locked.rows.find((r: any) => r.id === input.toAccountId);

      if (!from || !to) throw new AppError(404, "ACCOUNT_NOT_FOUND", "Account not found");
      if (from.user_id !== input.userId || to.user_id !== input.userId) {
        throw new AppError(403, "FORBIDDEN", "Accounts must belong to the current user (v1 internal transfer)");
      }
      if (from.currency !== to.currency) throw new AppError(400, "CURRENCY_MISMATCH", "Accounts must have same currency");
      if (BigInt(from.balance) < input.amount) throw new AppError(400, "INSUFFICIENT_FUNDS", "Insufficient funds");

      const fromNew = BigInt(from.balance) - input.amount;
      const toNew = BigInt(to.balance) + input.amount;

      await client.query(`update accounts set balance = $1 where id = $2`, [fromNew.toString(), from.id]);
      await client.query(`update accounts set balance = $1 where id = $2`, [toNew.toString(), to.id]);

      const txRes = await client.query(
        `insert into transactions(
          user_id, type, status, amount, currency, description, from_account_id, to_account_id, idempotency_key
        )
        values ($1,'TRANSFER','COMPLETED',$2,$3,$4,$5,$6,$7)
        returning *`,
        [
          input.userId,
          input.amount.toString(),
          from.currency,
          input.description ?? "Transfer",
          from.id,
          to.id,
          input.idempotencyKey
        ]
      );

      return txRes.rows[0];
    });
  } finally {
    client.release();
  }
}
