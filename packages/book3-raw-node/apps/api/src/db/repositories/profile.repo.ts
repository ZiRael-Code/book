import { pool } from "../client.js";

export async function getProfile(userId: string) {
  return pool.query(
    `select id, full_name, email, phone, address, avatar_url,
            kyc_status, user_status, notification_prefs, created_at
     from users
     where id = $1`,
    [userId]
  );
}

export async function updateProfile(input: {
  userId: string;
  fullName?: string | null;
  phone?: string | null;
  address?: string | null;
  avatarUrl?: string | null;
}) {
  return pool.query(
    `update users
     set
       full_name = coalesce($2, full_name),
       phone = $3,
       address = $4,
       avatar_url = $5
     where id = $1
     returning id, full_name, email, phone, address, avatar_url, kyc_status, user_status, created_at`,
    [input.userId, input.fullName ?? null, input.phone ?? null, input.address ?? null, input.avatarUrl ?? null]
  );
}

export async function getNotificationPrefs(userId: string) {
  return pool.query(
    `select notification_prefs
     from users
     where id = $1`,
    [userId]
  );
}

export async function setNotificationPrefs(userId: string, prefs: any) {
  return pool.query(
    `update users
     set notification_prefs = $2::jsonb
     where id = $1
     returning notification_prefs`,
    [userId, JSON.stringify(prefs)]
  );
}
