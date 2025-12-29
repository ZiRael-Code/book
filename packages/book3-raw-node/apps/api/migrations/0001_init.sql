create extension if not exists pgcrypto;

create table if not exists schema_migrations (
  filename text primary key,
  applied_at timestamptz not null default now()
);

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null unique,
  password_hash text not null,

  -- onboarding gate (later)
  user_status text not null default 'PENDING_VERIFICATION',
  kyc_status text not null default 'NOT_STARTED',

  created_at timestamptz not null default now()
);

create table if not exists sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  refresh_token_hash text not null,
  expires_at timestamptz not null,

  user_agent text null,
  ip text null,
  last_seen_at timestamptz not null default now(),

  revoked_at timestamptz null,
  created_at timestamptz not null default now()
);
