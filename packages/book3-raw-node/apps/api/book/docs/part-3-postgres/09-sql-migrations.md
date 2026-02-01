---
outline: deep
---





# 9. SQL Migrations (No ORM)

If you build a bank and your database tables change randomly, you will destroy trust.

So professionals do this:

> Every database change is written down as a migration.

A migration is simply:
- a `.sql` file
- that runs exactly once
- in a strict order

---

## A Simple Story

Imagine you and your friend are building AtopBank.

You create a `users` table on your laptop.

Your friend does not.

You push code and say:
> “It works on my machine.”

Your friend runs the API and gets:
> “relation users does not exist”

That’s why migrations exist.

They make database changes:
- repeatable
- predictable
- shareable

---

## What We Are Building

By the end:

- A `schema_migrations` table to track what ran  
- A simple migration runner (Node script)  
- A migrations folder with numbered SQL files  
- `npm run db:migrate` applies migrations

---

## Step 1 - Create migrations folder

Create:

apps/api/src/db/migrations/


Add your first migration:

📄 `apps/api/src/db/migrations/0001_init.sql`

```sql
CREATE TABLE IF NOT EXISTS schema_migrations (
  id TEXT PRIMARY KEY,
  applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```
Explanation....

id TEXT PRIMARY KEY

This is the unique name of each migration.

In our book, id will be the filename, like:

0001_init.sql

0002_accounts.sql

0003_add_sessions.sql

Because it is a PRIMARY KEY, Postgres will not allow duplicates.

`Meaning:`

if 0001_init.sql is already recorded,

we cannot insert it again.

So this table guarantees:

...each migration is recorded only once

`applied_at TIMESTAMPTZ NOT NULL DEFAULT now()`

This stores when the migration was applied.

Why is that useful?

- debugging (“when did we add this table?”)

- proving history (“this migration was applied on Jan 18”)

- teamwork (everyone can compare migration timing)

`TIMESTAMPTZ means “timestamp with timezone”.`

That’s the professional option because timezones exist in real life.

Why do we say IF NOT EXISTS?
CREATE TABLE IF NOT EXISTS schema_migrations ...


This means:

“Create this table if it doesn’t exist yet.
If it already exists, don’t crash.”

It makes the migration safer.

So if you run the migration runner again tomorrow, it won’t break just because the tracking table exists.

## Step 2 - Create a migration runner
📄 apps/api/src/db/migrate.ts

```ts
import fs from "node:fs";
import path from "node:path";
import { pool } from "./client";

const migrationsDir = path.join(process.cwd(), "src", "db", "migrations");

async function ensureMigrationsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      id TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
}

async function getAppliedMigrations() {
  const result = await pool.query(`SELECT id FROM schema_migrations`);
  return new Set(result.rows.map(r => r.id));
}

async function applyMigration(id: string, sql: string) {
  // One migration should be applied as a single unit (transaction)
  await pool.query("BEGIN");
  try {
    await pool.query(sql);
    await pool.query(`INSERT INTO schema_migrations (id) VALUES ($1)`, [id]);
    await pool.query("COMMIT");
    console.log(` Applied ${id}`);
  } catch (err) {
    await pool.query("ROLLBACK");
    console.error(` Failed ${id}`);
    throw err;
  }
}

async function main() {
  await ensureMigrationsTable();

  const applied = await getAppliedMigrations();

  const files = fs
    .readdirSync(migrationsDir)
    .filter(f => f.endsWith(".sql"))
    .sort(); // IMPORTANT: numbered files run in order

  for (const file of files) {
    if (applied.has(file)) continue;

    const fullPath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(fullPath, "utf8");
    await applyMigration(file, sql);
  }

  console.log("🎉 Migrations complete");
  await pool.end();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
```
Simple Explanation...


```ts
import fs from "node:fs";
import path from "node:path";
import { pool } from "./client";
```
fs → lets Node read files from the disk

path → helps build safe file paths

pool → our connection to PostgreSQL

We need these three things to:

find migration files

read their SQL

run them in the database

Where migrations live

```ts
const migrationsDir = path.join(process.cwd(), "src", "db", "migrations");
```
process.cwd() → the project root

then we walk into src/db/migrations

This is where all .sql migration files must live.

ensureMigrationsTable()

```ts
async function ensureMigrationsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      id TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
}
```
This function makes sure the tracking table exists.

Why?

migrations must not run twice

this table records which migration files were already applied

If the table already exists, nothing breaks.

getAppliedMigrations()
```ts
async function getAppliedMigrations() {
  const result = await pool.query(`SELECT id FROM schema_migrations`);
  return new Set(result.rows.map(r => r.id));
}
```
This function:

reads all migration IDs already applied

puts them into a Set

A Set is used because:

it is fast

it prevents duplicates

we can easily check: “has this migration already run?”

applyMigration()
```ts
async function applyMigration(id: string, sql: string) {
  await pool.query("BEGIN");
```
We start a database transaction.

This means:

“Either this whole migration succeeds, or nothing changes.”
```ts
  try {
    await pool.query(sql);
    await pool.query(`INSERT INTO schema_migrations (id) VALUES ($1)`, [id]);
    await pool.query("COMMIT");
```
Inside the transaction:

run the migration SQL

record its filename in schema_migrations

commit everything

Now Postgres remembers that this migration ran successfully.

```ts
  } catch (err) {
    await pool.query("ROLLBACK");
    throw err;
  }
}
```
If anything fails:

all changes are undone

database stays clean

error is rethrown

main()
```ts
async function main() {
  await ensureMigrationsTable();
  ```
First:

make sure the migration tracking table exists

```ts
  const applied = await getAppliedMigrations();
  ```
Then:

load all already-applied migrations

```ts
  const files = fs
    .readdirSync(migrationsDir)
    .filter(f => f.endsWith(".sql"))
    .sort();
```
Here we:

read all files in the migrations folder

keep only .sql files

sort them so 0001 runs before 0002

Order matters.

```ts
  for (const file of files) {
    if (applied.has(file)) continue;
```
For each migration file:

if it already ran → skip it

if not → apply it

```ts
    const fullPath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(fullPath, "utf8");
    await applyMigration(file, sql);
```
This:

reads the SQL file

sends it to Postgres

records it as applied

```ts
  await pool.end();
}
```
Finally:

close the database connection cleanly

Program entry
```ts
main().catch(err => {
  console.error(err);
  process.exit(1);
});
```
This:

runs the migration process

crashes the program if something goes wrong

prevents silent failures



## Step - Add script to run migrations
In apps/api/package.json:

```ts
{
  "scripts": {
    "db:migrate": "node --loader ts-node/esm src/db/migrate.ts"
  }
}
```
If you are not using ts-node, you can compile TS or write migrate.ts in JS.
(We can adjust based on your setup.)

Checkpoint
Run:


npm run db:migrate
You should see:

- Applied 0001_init.sql

- Migrations complete

Now your DB has:

- schema_migrations

- users
```ts
┌──────────────────────────────────────────┐
│       apps/api/src/db/migrations/        │
│                                          │
│  0001_init.sql                           │
│  0002_accounts.sql                       │
│  0003_transactions.sql                   │
│  ...                                     │
└───────────────────────┬──────────────────┘
                        │ read files (sorted)
                        ▼
┌──────────────────────────────────────────┐
│     migrate.ts (Migration Runner)         │
│                                          │
│  1) ensure schema_migrations exists       │
│  2) load applied migrations (SELECT id)   │
│  3) for each .sql file in order:          │
│       - if already applied → SKIP         │
│       - else → APPLY                      │
└───────────────────────┬──────────────────┘
                        │ APPLY(file)
                        ▼
        ┌─────────────────────────────────┐
        │   APPLY ONE MIGRATION (Atomic)  │
        │                                 │
        │   BEGIN                         │
        │     run SQL from file           │
        │     INSERT INTO schema_migrations(id)
        │   COMMIT                        │
        │                                 │
        │   if error → ROLLBACK           │
        └─────────────────┬───────────────┘
                          │
                          ▼
┌──────────────────────────────────────────┐
│           PostgreSQL (atopbank)           │
│                                          │
│  schema_migrations                        │
│   - id (PK)                               │
│   - applied_at                            │
│                                          │
│  users / accounts / transactions tables   │
│  indexes / constraints                    │
└──────────────────────────────────────────┘
```