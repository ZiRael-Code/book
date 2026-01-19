create table if not exists accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  name text not null,
  currency text not null,
  balance bigint not null default 0, -- minor units (kobo/cents)
  status text not null default 'OPEN',
  created_at timestamptz not null default now(),

  unique (user_id, currency)
);

create index if not exists accounts_user_id_idx on accounts(user_id);
