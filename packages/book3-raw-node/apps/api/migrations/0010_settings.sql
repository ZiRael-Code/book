alter table users
  add column if not exists phone text null,
  add column if not exists address text null,
  add column if not exists avatar_url text null,
  add column if not exists notification_prefs jsonb not null default '{"transfers":true,"cards":true,"kyc":true}'::jsonb;
