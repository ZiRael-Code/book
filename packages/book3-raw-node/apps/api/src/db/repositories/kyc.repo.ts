import { pool } from "../client.js";

export async function insertKycDocument(input: {
  userId: string;
  docType: string;
  fileRef: string;
}) {
  return pool.query(
    `insert into kyc_documents(user_id, doc_type, file_ref)
     values ($1,$2,$3)
     returning id, doc_type, file_ref, submitted_at`,
    [input.userId, input.docType, input.fileRef]
  );
}
