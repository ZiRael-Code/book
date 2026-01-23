import type { Handler } from "../types.js";
import { sendJson } from "../lib/http.js";
import { AppError } from "../lib/errors.js";
import { decodeCursor, encodeCursor } from "../lib/cursor.js";
import { listNotifications, markAllRead, markRead } from "../db/repositories/notifications.repo.js";

export const list: Handler = async (_req, res, ctx) => {
  const sp = ctx.url.searchParams;
  const limit = Number(sp.get("limit") ?? "20");
  const cursor = sp.get("cursor");

  let cursorCreatedAt: string | null = null;
  let cursorId: string | null = null;

  if (cursor) {
    const decoded = decodeCursor(cursor);
    cursorCreatedAt = decoded.createdAt;
    cursorId = decoded.id;
  }

  const result = await listNotifications({
    userId: ctx.user!.id,
    limit,
    cursorCreatedAt,
    cursorId
  });

  const items = result.rows;
  const nextCursor =
    items.length === 0
      ? null
      : encodeCursor(items[items.length - 1].created_at, items[items.length - 1].id);

  sendJson(res, 200, { notifications: items, nextCursor });
};

export const readOne: Handler = async (_req, res, ctx) => {
  const id = ctx.params.id;
  if (!id) throw new AppError(400, "VALIDATION_ERROR", "Missing notification id");

  const result = await markRead({ userId: ctx.user!.id, notificationId: id });
  if (!result.rowCount) throw new AppError(404, "NOTIFICATION_NOT_FOUND", "Notification not found");

  sendJson(res, 200, { ok: true });
};

export const readAll: Handler = async (_req, res, ctx) => {
  await markAllRead(ctx.user!.id);
  sendJson(res, 200, { ok: true });
};
