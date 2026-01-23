create table if not exists cards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  status text not null default 'PENDING', -- PENDING | ACTIVE | BLOCKED

  brand text not null default 'VISA',
  pan_last4 text not null,
  pan_enc text not null,
  cvv_enc text not null,

  exp_month int not null,
  exp_year int not null,

  spending_limit_minor bigint null, -- optional: per-day or per-month later
  created_at timestamptz not null default now()
);

create index if not exists cards_user_id_idx on cards(user_id);
create index if not exists cards_status_idx on cards(status);
