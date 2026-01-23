import { pool } from "../client.js";

export async function listPendingKyc(limit: number = 50) {
  return pool.query(
    `select id, full_name, email, kyc_status, user_status, created_at
     from users
     where kyc_status = 'PENDING_REVIEW'
     order by created_at asc
     limit $1`,
    [Math.min(Math.max(limit, 1), 200)]
  );
}

export async function getKycUser(userId: string) {
  return pool.query(
    `select id, full_name, email,
            dob, country, address, phone,
            kyc_status, user_status,
            kyc_reviewed_at, kyc_rejection_reason,
            created_at
     from users
     where id = $1`,
    [userId]
  );
}

export async function getUserKycDocuments(userId: string) {
  return pool.query(
    `select id, doc_type, file_ref, submitted_at
     from kyc_documents
     where user_id = $1
     order by submitted_at desc`,
    [userId]
  );
}

export async function approveKyc(userId: string) {
  return pool.query(
    `update users
     set kyc_status = 'APPROVED',
         user_status = 'ACTIVE',
         kyc_reviewed_at = now(),
         kyc_rejection_reason = null
     where id = $1
     returning id, kyc_status, user_status`,
    [userId]
  );
}

export async function rejectKyc(userId: string, reason: string) {
  return pool.query(
    `update users
     set kyc_status = 'REJECTED',
         kyc_reviewed_at = now(),
         kyc_rejection_reason = $2
     where id = $1
     returning id, kyc_status, user_status, kyc_rejection_reason`,
    [userId, reason]
  );
}
