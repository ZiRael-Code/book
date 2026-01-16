import { pool } from "../client.js";

export async function insertUser(input: { fullName: string; email: string; passwordHash: string }) {
  return pool.query(
    `insert into users(full_name, email, password_hash)
     values ($1,$2,$3) 
     returning id, full_name, email, user_status, kyc_status, created_at`,
    [input.fullName, input.email, input.passwordHash],
  );
}


export async function findUserByEmail(email: string) {
  return pool.query(
    `select id, full_name, email, password_hash, user_status, kyc_status
     from users
     where email = $1`,
    [email],
  );
}

export async function findUserById(id: string) {
  return pool.query(
    `select id, full_name, email, user_status, kyc_status
     from users
     where id = $1`,
    [id],
  );
}

export async function updateKycProfile(input: {
  userId: string;
  dob: string;      // YYYY-MM-DD
  country: string;
  address: string;
  phone: string;
}) {
  return pool.query(
    `update users
     set dob = $2::date,
         country = $3,
         address = $4,
         phone = $5,
         kyc_status = 'PROFILE_SUBMITTED'
     where id = $1
     returning id, full_name, email, user_status, kyc_status`,
    [input.userId, input.dob, input.country, input.address, input.phone]
  );
}

export async function setKycStatus(userId: string, kycStatus: string) {
  return pool.query(
    `update users set kyc_status = $2 where id = $1 returning id, user_status, kyc_status`,
    [userId, kycStatus]
  );
}

export async function setUserStatus(userId: string, userStatus: string) {
  return pool.query(
    `update users set user_status = $2 where id = $1 returning id, user_status, kyc_status`,
    [userId, userStatus]
  );
}
