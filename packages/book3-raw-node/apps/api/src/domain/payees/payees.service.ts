import { AppError } from "../../lib/errors.js";
import { findUserByEmail } from "../../db/repositories/users.repo.js";
import { insertPayee, listPayees, getPayeeById, deletePayee } from "../../db/repositories/payees.repo.js";

export async function addInternalPayee(input: {
  ownerUserId: string;
  name: string;
  email: string;
}) {
  const email = input.email.toLowerCase().trim();

  const userRes = await findUserByEmail(email);
  if (!userRes.rowCount) throw new AppError(404, "USER_NOT_FOUND", "No AtopBank user with that email");

  const target = userRes.rows[0];

  if (target.id === input.ownerUserId) {
    throw new AppError(400, "INVALID_PAYEE", "You cannot add yourself as a payee");
  }

  try {
    const payeeRes = await insertPayee({
      ownerUserId: input.ownerUserId,
      name: input.name.trim(),
      targetUserId: target.id,
      targetEmail: target.email
    });
    return payeeRes.rows[0];
  } catch (e: any) {
    if (e?.code === "23505") throw new AppError(409, "PAYEE_EXISTS", "Payee already saved");
    throw e;
  }
}

export async function getMyPayees(ownerUserId: string, q?: string) {
  const res = await listPayees(ownerUserId, q);
  return res.rows;
}

export async function getMyPayee(ownerUserId: string, payeeId: string) {
  const res = await getPayeeById({ ownerUserId, payeeId });
  if (!res.rowCount) throw new AppError(404, "PAYEE_NOT_FOUND", "Payee not found");
  return res.rows[0];
}

export async function removePayee(ownerUserId: string, payeeId: string) {
  const res = await deletePayee({ ownerUserId, payeeId });
  if (!res.rowCount) throw new AppError(404, "PAYEE_NOT_FOUND", "Payee not found");
  return true;
}
