create table if not exists payees (
  id uuid primary key default gen_random_uuid(),

  owner_user_id uuid not null references users(id) on delete cascade,  -- the person saving this payee
  kind text not null default 'INTERNAL',                                -- INTERNAL (v1)

  name text not null,
  target_user_id uuid not null references users(id) on delete restrict, -- the payee's user id
  target_email text not null,

  created_at timestamptz not null default now(),

  unique (owner_user_id, target_user_id)
);

create index if not exists payees_owner_user_id_idx on payees(owner_user_id);
create index if not exists payees_target_user_id_idx on payees(target_user_id);
