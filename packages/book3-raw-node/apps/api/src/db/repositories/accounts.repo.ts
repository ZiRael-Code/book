import { pool } from "../client.js";

export async function createAccount(input: { userId: string; name: string; currency: string }) {
  return pool.query(
    `insert into accounts(user_id, name, currency)
     values ($1,$2,$3)
     returning id, user_id, name, currency, balance, status, created_at`,
    [input.userId, input.name, input.currency]
  );
}

export async function listAccounts(userId: string) {
  return pool.query(
    `select id, user_id, name, currency, balance, status, created_at
     from accounts
     where user_id = $1
     order by created_at desc`,
    [userId]
  );
}

export async function getAccountById(input: { userId: string; accountId: string }) {
  return pool.query(
    `select id, user_id, name, currency, balance, status, created_at
     from accounts
     where id = $1 and user_id = $2`,
    [input.accountId, input.userId]
  );
}

export async function getUserAccountByCurrency(input: {
  userId: string;
  currency: string;
}) {
  return pool.query(
    `select id, user_id, currency, balance
     from accounts
     where user_id = $1 and currency = $2 and status = 'OPEN'
     limit 1`,
    [input.userId, input.currency]
  );
}
