create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  type text not null,           -- KYC_APPROVED | KYC_REJECTED | TOPUP | TRANSFER_SENT | TRANSFER_RECEIVED | CARD_ISSUED | CARD_BLOCKED | CARD_UNBLOCKED
  title text not null,
  body text not null,

  entity_type text null,        -- "transaction" | "card" | "kyc"
  entity_id uuid null,

  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists notif_user_created_idx on notifications(user_id, created_at desc);
create index if not exists notif_user_is_read_idx on notifications(user_id, is_read);
