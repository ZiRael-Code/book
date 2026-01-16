import argon2 from "argon2";
import crypto from "node:crypto";
import { AppError } from "../../lib/errors.js";
import { config } from "../../lib/config.js";
import { createSession, findSessionById, revokeSession, touchSession } from "../../db/repositories/sessions.repo.js";
import { findUserByEmail, findUserById, insertUser } from "../../db/repositories/users.repo.js";
import { signAccessToken, signRefreshToken, verifyJwt } from "./tokens.js";
import { computeOnboardingNext } from "./onboarding.js";

//machine secrets
function sha256Hex(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex");
}
// update feeds the raw data into the hashing engine while digest is the sealing and packaging

export async function signup(input: { fullName: string; email: string; password: string }) {
  const {fullName, email, password} = input
  const passwordHash = await argon2.hash(password);

  try {
    const result = await insertUser({ fullName, email, passwordHash });
    const [user] = result.rows;
    return { user,
  onboarding: {
    next: computeOnboardingNext({ userStatus: user.user_status, kycStatus: user.kyc_status }),
    userStatus: user.user_status,
    kycStatus: user.kyc_status} };
  } catch (e: any) {
    if (e?.code === "23505") throw new AppError(409, "EMAIL_TAKEN", "Email already registered");
    throw e;
  }
}

export async function login(input: {
  email: string;
  password: string;
  remember: boolean;
  userAgent: string | null;
  ip: string | null;
}) {
  const {email, password, remember, userAgent, ip} = input
  const userRes = await findUserByEmail(email);
  if (!userRes.rowCount) throw new AppError(401, "INVALID_CREDENTIALS", "Invalid email or password");

  const [user] = userRes.rows;
  const ok = await argon2.verify(user.password_hash, password);
  if (!ok) throw new AppError(401, "INVALID_CREDENTIALS", "Invalid email or password");

  const refreshTtl = remember ? config.JWT_REFRESH_TTL_SECONDS : 60 * 60 * 24 * 7; // 7 days if not remember
  const expiresAt = new Date(Date.now() + refreshTtl * 1000);

  // create session with refresh token hash later (after session id exists)
  const tempRefresh = "temp";
  const sessionRes = await createSession({
    userId: user.id,
    refreshTokenHash: sha256Hex(tempRefresh),
    expiresAt,
    userAgent,
    ip,
  });

  const sessionId = sessionRes.rows[0].id as string;

  // sign tokens
  const accessToken = signAccessToken({ userId: user.id, email: user.email }, config.JWT_ACCESS_SECRET, config.JWT_ACCESS_TTL_SECONDS);
  const refreshToken = signRefreshToken({ userId: user.id, sessionId }, config.JWT_REFRESH_SECRET, refreshTtl);


  // Proper update hash (no revoke). Do update directly:
  // (we keep code here minimal by using a direct query approach in repo; add function below if you prefer)
  // For now, do the simplest safe approach: write hash via SQL inline:
  // eslint-disable-next-line
  const { pool } = await import("../../db/client.js");
  await pool.query(`update sessions set refresh_token_hash=$1 where id=$2`, [sha256Hex(refreshToken), sessionId]);

  return {
    user: { id: user.id, email: user.email, fullName: user.full_name },
    tokens: { accessToken, refreshToken },
    onboarding: {
    next: computeOnboardingNext({ userStatus: user.user_status, kycStatus: user.kyc_status }),
    userStatus: user.user_status,
    kycStatus: user.kyc_status
  }
  };
}

export async function refresh(input: { refreshToken: string; userAgent?: string | null; ip?: string | null }) {
  const payload = verifyJwt(input.refreshToken, config.JWT_REFRESH_SECRET);
  if (!payload.sid) throw new AppError(401, "INVALID_TOKEN", "Invalid refresh token");

  const sessionRes = await findSessionById(payload.sid);
  if (!sessionRes.rowCount) throw new AppError(401, "INVALID_SESSION", "Session not found");

  const session = sessionRes.rows[0];
  if (session.revoked_at) throw new AppError(401, "SESSION_REVOKED", "Session revoked");

  const now = new Date();
  if (new Date(session.expires_at) <= now) throw new AppError(401, "SESSION_EXPIRED", "Session expired");

  const expectedHash = sha256Hex(input.refreshToken);
  if (expectedHash !== session.refresh_token_hash) throw new AppError(401, "INVALID_TOKEN", "Invalid refresh token");

  await touchSession(session.id);

  const userRes = await findUserById(session.user_id);
  if (!userRes.rowCount) throw new AppError(401, "INVALID_USER", "User not found");
  const user = userRes.rows[0];

  const accessToken = signAccessToken({ userId: user.id, email: user.email }, config.JWT_ACCESS_SECRET, config.JWT_ACCESS_TTL_SECONDS);

  return { accessToken };
}

export async function logout(sessionId: string) {
  await revokeSession(sessionId);
}
