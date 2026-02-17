alter table users
  add column if not exists dob date,
  add column if not exists country text,
  add column if not exists address text,
  add column if not exists phone text;

create table if not exists kyc_documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  doc_type text not null,  -- PASSPORT | DL | NIN
  file_ref text not null,  -- placeholder for now
  submitted_at timestamptz not null default now()
);

create index if not exists kyc_documents_user_id_idx on kyc_documents(user_id);



