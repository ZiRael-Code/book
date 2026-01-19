import { pool } from "../client.js";

export async function insertCard(input: {
  userId: string;
  status: "PENDING" | "ACTIVE" | "BLOCKED";
  brand: string;
  panLast4: string;
  panEnc: string;
  cvvEnc: string;
  expMonth: number;
  expYear: number;
  spendingLimitMinor?: bigint | null;
}) {
  return pool.query(
    `insert into cards(user_id, status, brand, pan_last4, pan_enc, cvv_enc, exp_month, exp_year, spending_limit_minor)
     values ($1,$2,$3,$4,$5,$6,$7,$8,$9)
     returning id, user_id, status, brand, pan_last4, exp_month, exp_year, spending_limit_minor, created_at`,
    [
      input.userId,
      input.status,
      input.brand,
      input.panLast4,
      input.panEnc,
      input.cvvEnc,
      input.expMonth,
      input.expYear,
      input.spendingLimitMinor ? input.spendingLimitMinor.toString() : null
    ]
  );
}

export async function listCards(userId: string) {
  return pool.query(
    `select id, user_id, status, brand, pan_last4, exp_month, exp_year, spending_limit_minor, created_at
     from cards
     where user_id = $1
     order by created_at desc`,
    [userId]
  );
}

export async function getCardById(input: { userId: string; cardId: string }) {
  return pool.query(
    `select id, user_id, status, brand, pan_last4, exp_month, exp_year, spending_limit_minor, created_at
     from cards
     where id = $1 and user_id = $2`,
    [input.cardId, input.userId]
  );
}

export async function getCardSecrets(input: { userId: string; cardId: string }) {
  return pool.query(
    `select id, user_id, status, brand, pan_last4, pan_enc, cvv_enc, exp_month, exp_year
     from cards
     where id = $1 and user_id = $2`,
    [input.cardId, input.userId]
  );
}

export async function setCardStatus(input: { userId: string; cardId: string; status: string }) {
  return pool.query(
    `update cards set status = $3
     where id = $1 and user_id = $2
     returning id, status`,
    [input.cardId, input.userId, input.status]
  );
}
