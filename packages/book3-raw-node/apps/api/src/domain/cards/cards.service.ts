import { AppError } from "../../lib/errors.js";
import { encryptText, decryptText } from "../../lib/cardCrypto.js";
import { generateVirtualCard } from "./cardFactory.js";
import { insertCard, listCards, getCardById, getCardSecrets, setCardStatus } from "../../db/repositories/cards.repo.js";

export async function issueCard(input: { userId: string; brand?: string }) {
  // v1 design: create immediately ACTIVE (or keep PENDING if you want an extra step)
  const generated = generateVirtualCard();

  const brand = input.brand ?? "VISA";

  const created = await insertCard({
    userId: input.userId,
    status: "ACTIVE",
    brand,
    panLast4: generated.last4,
    panEnc: encryptText(generated.pan),
    cvvEnc: encryptText(generated.cvv),
    expMonth: generated.expMonth,
    expYear: generated.expYear
  });

  return created.rows[0];
}

export async function myCards(userId: string) {
  const res = await listCards(userId);
  return res.rows;
}

export async function myCard(userId: string, cardId: string) {
  const res = await getCardById({ userId, cardId });
  if (!res.rowCount) throw new AppError(404, "CARD_NOT_FOUND", "Card not found");
  return res.rows[0];
}

export async function reveal(userId: string, cardId: string) {
  const res = await getCardSecrets({ userId, cardId });
  if (!res.rowCount) throw new AppError(404, "CARD_NOT_FOUND", "Card not found");

  const card = res.rows[0];
  if (card.status === "BLOCKED") throw new AppError(400, "CARD_BLOCKED", "Card is blocked");

  return {
    id: card.id,
    brand: card.brand,
    pan: decryptText(card.pan_enc),
    cvv: decryptText(card.cvv_enc),
    expMonth: card.exp_month,
    expYear: card.exp_year
  };
}

export async function block(userId: string, cardId: string) {
  const res = await setCardStatus({ userId, cardId, status: "BLOCKED" });
  if (!res.rowCount) throw new AppError(404, "CARD_NOT_FOUND", "Card not found");
  return res.rows[0];
}

export async function unblock(userId: string, cardId: string) {
  const res = await setCardStatus({ userId, cardId, status: "ACTIVE" });
  if (!res.rowCount) throw new AppError(404, "CARD_NOT_FOUND", "Card not found");
  return res.rows[0];
}
