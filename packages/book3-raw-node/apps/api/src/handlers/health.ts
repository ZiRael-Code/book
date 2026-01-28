import { pool } from "../db/client.js";
import { sendJson } from "../lib/http.js";
import type { Handler } from "../types.js";

export const health: Handler = async (_req, res) => {
  sendJson(res, 200, { status: "ok" });
};

export const ready: Handler = async (_req, res) => {
  await pool.query("select 1");
  sendJson(res, 200, { status: "ready" });
};
