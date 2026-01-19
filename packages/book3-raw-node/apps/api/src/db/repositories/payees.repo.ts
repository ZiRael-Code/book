import { pool } from "../client.js";

export async function insertPayee(input: {
  ownerUserId: string;
  name: string;
  targetUserId: string;
  targetEmail: string;
}) {
  return pool.query(
    `insert into payees(owner_user_id, name, target_user_id, target_email)
     values ($1,$2,$3,$4)
     returning id, owner_user_id, kind, name, target_user_id, target_email, created_at`,
    [input.ownerUserId, input.name, input.targetUserId, input.targetEmail]
  );
}

export async function listPayees(ownerUserId: string, q?: string) {
  if (q && q.trim()) {
    const query = `%${q.trim().toLowerCase()}%`;
    return pool.query(
      `select id, owner_user_id, kind, name, target_user_id, target_email, created_at
       from payees
       where owner_user_id = $1
         and (lower(name) like $2 or lower(target_email) like $2)
       order by created_at desc`,
      [ownerUserId, query]
    );
  }

  return pool.query(
    `select id, owner_user_id, kind, name, target_user_id, target_email, created_at
     from payees
     where owner_user_id = $1
     order by created_at desc`,
    [ownerUserId]
  );
}

export async function getPayeeById(input: { ownerUserId: string; payeeId: string }) {
  return pool.query(
    `select id, owner_user_id, kind, name, target_user_id, target_email, created_at
     from payees
     where id = $1 and owner_user_id = $2`,
    [input.payeeId, input.ownerUserId]
  );
}

export async function deletePayee(input: { ownerUserId: string; payeeId: string }) {
  return pool.query(
    `delete from payees
     where id = $1 and owner_user_id = $2
     returning id`,
    [input.payeeId, input.ownerUserId]
  );
}
