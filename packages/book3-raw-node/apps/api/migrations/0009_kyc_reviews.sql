alter table users
  add column if not exists kyc_reviewed_at timestamptz null,
  add column if not exists kyc_rejection_reason text null;
