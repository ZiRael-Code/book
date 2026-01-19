import { requireBoolean, requireEmail, requirePassword, requireString } from "../../lib/validate.js";

export function parseSignup(body: any) {
  return {
    fullName: requireString(body.fullName, "fullName"),
    email: requireEmail(body.email),
    password: requirePassword(body.password),
  };
}

export function parseLogin(body: any) {
  return {
    email: requireEmail(body.email),
    password: requireString(body.password, "password"),
    remember: body.remember === undefined ? false : requireBoolean(body.remember, "remember"),
  };
}

export function parseRefresh(body: any) {
  return {
    refreshToken: requireString(body.refreshToken, "refreshToken"),
  };
}
