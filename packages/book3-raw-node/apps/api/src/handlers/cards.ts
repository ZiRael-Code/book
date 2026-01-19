import type { Handler } from "../types.js";
import { readJsonBody } from "../lib/json.js";
import { sendJson } from "../lib/http.js";
import * as Cards from "../domain/cards/cards.service.js";
import { requireParam } from "../lib/params.js";

export const issue: Handler = async (req, res, ctx) => {
  const body = await readJsonBody<any>(req);
  const brand = body?.brand ? String(body.brand) : undefined;

  const card = await Cards.issueCard({ userId: ctx.user!.id, brand });
  sendJson(res, 201, { card });
};

export const list: Handler = async (_req, res, ctx) => {
  const cards = await Cards.myCards(ctx.user!.id);
  sendJson(res, 200, { cards });
};

export const getById: Handler = async (_req, res, ctx) => {
  const cardId = requireParam(ctx.params, "id");
  const card = await Cards.myCard(ctx.user!.id, cardId);
  sendJson(res, 200, { card });
};

export const reveal: Handler = async (_req, res, ctx) => {
  const cardId = requireParam(ctx.params, "id");
  const details = await Cards.reveal(ctx.user!.id, cardId);
  sendJson(res, 200, { card: details });
};

export const block: Handler = async (_req, res, ctx) => {
  const cardId = requireParam(ctx.params, "id");
  const result = await Cards.block(ctx.user!.id, cardId);
  sendJson(res, 200, { card: result });
};

export const unblock: Handler = async (_req, res, ctx) => {
  const cardId = requireParam(ctx.params, "id");
  const result = await Cards.unblock(ctx.user!.id, cardId);
  sendJson(res, 200, { card: result });
};

