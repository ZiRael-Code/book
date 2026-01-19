import { pool } from "../client.js";

export async function insertNotification(input: {
  userId: string;
  type: string;
  title: string;
  body: string;
  entityType?: string | null;
  entityId?: string | null;
}) {
  return pool.query(
    `insert into notifications(user_id, type, title, body, entity_type, entity_id)
     values ($1,$2,$3,$4,$5,$6)
     returning id, user_id, type, title, body, entity_type, entity_id, is_read, created_at`,
    [input.userId, input.type, input.title, input.body, input.entityType ?? null, input.entityId ?? null]
  );
}

export async function listNotifications(input: {
  userId: string;
  limit: number;
  cursorCreatedAt?: string | null;
  cursorId?: string | null;
}) {
  const limit = Math.min(Math.max(input.limit, 1), 50);

  const params: any[] = [input.userId, limit];
  let where = `where user_id = $1`;

  if (input.cursorCreatedAt && input.cursorId) {
    params.push(input.cursorCreatedAt);
    params.push(input.cursorId);
    where += ` and (created_at, id) < ($${params.length - 1}::timestamptz, $${params.length}::uuid)`;
  }

  const sql = `
    select id, user_id, type, title, body, entity_type, entity_id, is_read, created_at
    from notifications
    ${where}
    order by created_at desc, id desc
    limit $2
  `;

  return pool.query(sql, params);
}

export async function markRead(input: { userId: string; notificationId: string }) {
  return pool.query(
    `update notifications
     set is_read = true
     where id = $1 and user_id = $2
     returning id, is_read`,
    [input.notificationId, input.userId]
  );
}

export async function markAllRead(userId: string) {
  return pool.query(
    `update notifications
     set is_read = true
     where user_id = $1 and is_read = false`,
    [userId]
  );
}
