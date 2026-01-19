import { pool } from "../../db/client.js";
import { withTransaction } from "../../db/tx.js";
import { AppError } from "../../lib/errors.js";
import { findTxByIdempotencyKey } from "../../db/repositories/transactions.repo.js";
import { getUserAccountByCurrency } from "../../db/repositories/accounts.repo.js";
import { getPayeeById } from "../../db/repositories/payees.repo.js";

export async function sendMoney(input: {
  senderUserId: string;
  fromAccountId: string;
  payeeId: string;
  amount: bigint;
  idempotencyKey: string;
}) {
  if (input.amount <= 0n) {
    throw new AppError(400, "INVALID_AMOUNT", "Amount must be greater than zero");
  }

  // idempotency
  const existing = await findTxByIdempotencyKey(input.senderUserId, input.idempotencyKey);
  if (existing.rowCount) return existing.rows[0];

  const client = await pool.connect();
  try {
    return await withTransaction(client, async () => {
      // load payee
      const payeeRes = await getPayeeById({
        ownerUserId: input.senderUserId,
        payeeId: input.payeeId
      });
      if (!payeeRes.rowCount) throw new AppError(404, "PAYEE_NOT_FOUND", "Payee not found");

      const payee = payeeRes.rows[0];

      // lock sender account
      const senderRes = await client.query(
        `select id, user_id, currency, balance
         from accounts
         where id = $1 and user_id = $2
         for update`,
        [input.fromAccountId, input.senderUserId]
      );
      if (!senderRes.rowCount) throw new AppError(404, "ACCOUNT_NOT_FOUND", "Source account not found");

      const sender = senderRes.rows[0];
      if (BigInt(sender.balance) < input.amount) {
        throw new AppError(400, "INSUFFICIENT_FUNDS", "Insufficient funds");
      }

      // find payee wallet (same currency)
      const payeeAccRes = await getUserAccountByCurrency({
        userId: payee.target_user_id,
        currency: sender.currency
      });
      if (!payeeAccRes.rowCount) {
        throw new AppError(400, "PAYEE_NO_ACCOUNT", "Payee has no wallet for this currency");
      }

      const receiver = payeeAccRes.rows[0];

      // lock receiver account
      await client.query(
        `select id from accounts where id = $1 for update`,
        [receiver.id]
      );

      // balances
      const senderNew = BigInt(sender.balance) - input.amount;
      const receiverNew = BigInt(receiver.balance) + input.amount;

      await client.query(`update accounts set balance = $1 where id = $2`, [
        senderNew.toString(),
        sender.id
      ]);
      await client.query(`update accounts set balance = $1 where id = $2`, [
        receiverNew.toString(),
        receiver.id
      ]);

      // transaction record
      const txRes = await client.query(
        `insert into transactions(
          user_id, type, status, amount, currency,
          from_account_id, to_account_id, idempotency_key
        )
        values ($1,'TRANSFER','COMPLETED',$2,$3,$4,$5,$6)
        returning *`,
        [
          input.senderUserId,
          input.amount.toString(),
          sender.currency,
          sender.id,
          receiver.id,
          input.idempotencyKey
        ]
      );

      return txRes.rows[0];
    });
  } finally {
    client.release();
  }
}
