create table if not exists transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  type text not null,         -- TOPUP | TRANSFER
  status text not null,       -- COMPLETED | FAILED
  amount bigint not null,     -- minor units
  currency text not null,

  description text null,

  from_account_id uuid null references accounts(id),
  to_account_id uuid null references accounts(id),

  idempotency_key text not null,
  created_at timestamptz not null default now(),

  unique (user_id, idempotency_key)
);

create index if not exists tx_user_id_created_at_idx on transactions(user_id, created_at desc);
create index if not exists tx_from_account_idx on transactions(from_account_id);
create index if not exists tx_to_account_idx on transactions(to_account_id);
