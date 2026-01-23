import { pool } from "../client.js";

export async function createSession(input: {
  userId: string;
  refreshTokenHash: string;
  expiresAt: Date;
  userAgent: string | null;
  ip: string | null;
}) {
  return pool.query(
    `insert into sessions(user_id, refresh_token_hash, expires_at, user_agent, ip)
     values ($1,$2,$3,$4,$5)
     returning id, expires_at`,
    [input.userId, input.refreshTokenHash, input.expiresAt, input.userAgent, input.ip],
  );
}

export async function findSessionById(id: string) {
  return pool.query(
    `select id, user_id, refresh_token_hash, expires_at, revoked_at
     from sessions
     where id = $1`,
    [id],
  );
}

export async function touchSession(id: string) {
  return pool.query(`update sessions set last_seen_at = now() where id = $1`, [id]);
}

export async function listSessions(userId: string) {
  return pool.query(
    `select id, user_id, created_at, last_seen_at, user_agent, ip, revoked_at
     from sessions
     where user_id = $1
     order by created_at desc`,
    [userId]
  );
}

export async function revokeSessionById(input: { userId: string; sessionId: string }) {
  return pool.query(
    `update sessions
     set revoked_at = now()
     where id = $1 and user_id = $2 and revoked_at is null
     returning id, revoked_at`,
    [input.sessionId, input.userId]
  );
}

export async function revokeSession(sessionId: string) {
  return pool.query(
    `update sessions
     set revoked_at = now()
     where id = $1 and revoked_at is null
     returning id, revoked_at`,
    [sessionId]
  );
}