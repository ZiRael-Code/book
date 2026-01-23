import argon2 from "argon2";
import { AppError } from "../../lib/errors.js";
import { pool } from "../../db/client.js";

export async function changePassword(input: {
  userId: string;
  currentPassword: string;
  newPassword: string;
}) {
  if (input.newPassword.length < 8) {
    throw new AppError(400, "WEAK_PASSWORD", "Password must be at least 8 characters");
  }

  const userRes = await pool.query(
    `select id, password_hash
     from users
     where id = $1`,
    [input.userId]
  );

  const user = userRes.rows[0];
  if (!user) throw new AppError(404, "USER_NOT_FOUND", "User not found");

  const ok = await argon2.verify(user.password_hash, input.currentPassword);
  if (!ok) throw new AppError(400, "INVALID_PASSWORD", "Current password is incorrect");

  const newHash = await argon2.hash(input.newPassword);

  await pool.query(
    `update users set password_hash = $2 where id = $1`,
    [input.userId, newHash]
  );

  return true;
}
