import type { Handler } from "../types.js";
import { readJsonBody } from "../lib/json.js";
import { sendJson } from "../lib/http.js";
import { parseLogin, parseRefresh, parseSignup } from "../domain/auth/validators.js";
import * as Auth from "../domain/auth/auth.service.js";
import { AppError } from "../lib/errors.js";
import { verifyJwt } from "../domain/auth/tokens.js";
import { config } from "../lib/config.js";

export const signup: Handler = async (req, res) => {
  const body = await readJsonBody<any>(req);
  const input = parseSignup(body);
  const result = await Auth.signup(input);
  sendJson(res, 201, result);
};

export const login: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);
  const input = parseLogin(body);

  const result = await Auth.login({
    ...input,
    userAgent: ctx.userAgent,
    ip: ctx.ip,
  });

  sendJson(res, 200, result);
};

export const refresh: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);
  const input = parseRefresh(body);
  const result = await Auth.refresh({ refreshToken: input.refreshToken, userAgent: ctx.userAgent, ip: ctx.ip });
  sendJson(res, 200, result);
};

export const logout: Handler = async (req, res) => {
  const body = await readJsonBody<any>(req);
  const refreshToken = body?.refreshToken;
  if (typeof refreshToken !== "string") throw new AppError(400, "VALIDATION_ERROR", "refreshToken is required");

  const payload = verifyJwt(refreshToken, config.JWT_REFRESH_SECRET);
  if (!payload.sid) throw new AppError(401, "INVALID_TOKEN", "Invalid refresh token");

  await Auth.logout(payload.sid);
  sendJson(res, 200, { ok: true });
};
