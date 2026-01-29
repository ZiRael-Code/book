---
outline: deep
---

# 8. Postgres Setup & Connections (Raw SQL)

Before AtopBank can store users, accounts, or transactions, it needs a place to **remember things**.

A server has short memory:
- restart the server → memory is gone

A database is long memory:
- restart the server → data stays

That’s what Postgres is: the bank’s **vault**.

---

## A Simple Story

Imagine you run a small bank… but you only write records on a whiteboard.

A customer deposits money:
- you write it on the board

Then NEPA takes light and your system restarts.

Whiteboard is wiped.

Customer comes back:
> “Where is my money?”

That’s why we use a database.

---

## What We Are Building

By the end of this chapter:

- We can connect to Postgres  
- We can run a simple SQL query from Node  
- Our API has a single DB client (a pool)  
- We can check DB health (`/ready` later)

---

## Step 1 - Run Postgres (local)

The easiest way is Docker.

Create this:

📄 `docker-compose.yml` (at repo root)

```yml
services:
  db:
    image: postgres:16
    container_name: atopbank-db
    environment:
      POSTGRES_USER: atop
      POSTGRES_PASSWORD: atop
      POSTGRES_DB: atopbank
    ports:
      - "5432:5432"
    volumes:
      - atopbank_pgdata:/var/lib/postgresql/data

volumes:
  atopbank_pgdata:
```

>Explaination...

image: postgres:16 → downloads Postgres

POSTGRES_USER/PASSWORD/DB → creates default login + database

ports → lets your laptop talk to the container

volumes → saves data even if container restarts

Start it:

```ts
docker compose up -d
```

## Step 2 - Install pg
We are allowed one database library: **`pg`**.

### What is `pg`?

`pg` is the **official PostgreSQL driver for Node.js**.

In simple words:

> `pg` is the tool that lets your Node.js code **talk to PostgreSQL**.

Node.js cannot speak to databases by itself.  
PostgreSQL does not understand JavaScript.

`pg` is the translator between them.

---

### What `pg` does 

When your code runs this:

```ts
pool.query("SELECT * FROM users");
```
pg:

opens a connection to PostgreSQL

sends the SQL text

waits for the database to respond

converts the result into JavaScript objects

Without pg, Node.js has no way to send SQL to Postgres.

**What pg is NOT!**

It is important to understand this:

- pg is not an ORM

- it does not generate SQL for you

- it does not hide the database

**pg only does one job:**

- send raw SQL and return results

That is exactly what we want in this book.

**Why we use pg in this book**

We choose pg because:

- it is stable and widely used

- it works with raw SQL

- it has no opinions about structure

- it stays out of your way


## Step 3 - Add DATABASE_URL
In your .env (apps/api or root, depending on your setup):

```ts
DATABASE_URL=postgres://atop:atop@localhost:5432/atopbank
```
Explaination.....

That string means:

postgres:// → the protocol

atop:atop → username:password

localhost:5432 → where Postgres is running

/atopbank → the database name

### Step 4 - Create the DB Pool
📄 apps/api/src/db/client.ts

```ts
import { Pool } from "pg";
import { config } from "../lib/config";

export const pool = new Pool({
  connectionString: config.databaseUrl,
});
```
Explaination... 

Pool means: “a reusable set of connections”

Why pool? Because opening a new DB connection for every request is slow.

connectionString uses your DATABASE_URL

## Step 5 - Test the Connection (Optional)
Create:

📄 apps/api/src/db/ping.ts
```ts
import { pool } from "./client";

export async function pingDb() {
  const result = await pool.query("SELECT 1 as ok");
  return result.rows[0];
}
```
Explaination...
pool.query(...) sends SQL to Postgres

SELECT 1 as ok is like saying: “Hey DB, are you alive?”

result returns rows like: { ok: 1 }

## Step 6 - Use it in a quick endpoint (temporary)

In your server/router, add a simple route handler:

📄 apps/api/src/handlers/ready.ts

```ts
import { pingDb } from "../db/ping";

export async function ready(_req: any, res: any) {
  try {
    const data = await pingDb();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", db: data.ok }));
  } catch {
    res.writeHead(503, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "down" }));
  }
}
```
Explaination....

If DB responds → return 200 OK

If DB fails → return 503 (service unavailable)

Checkpoint
Start Postgres + API.

Call:

GET /ready

Expected:

```json
{ "status": "ok", "db": 1 }
```
```ts
┌──────────────────────────┐
│        Client            │
│  (Browser / Postman)     │
└─────────────┬────────────┘
              │ HTTP request
              ▼
┌──────────────────────────┐
│      Node.js Server      │
│                          │
│  /ready endpoint         │
│  (handler function)      │
└─────────────┬────────────┘
              │ calls
              ▼
┌──────────────────────────┐
│     Database Layer       │
│                          │
│  pingDb()                │
│  pool.query("SELECT 1")  │
└─────────────┬────────────┘
              │ uses
              ▼
┌──────────────────────────┐
│     pg Connection Pool   │
│        (Pool)            │
│                          │
│  - keeps connections     │
│  - reuses them           │
│  - avoids reconnecting   │
└─────────────┬────────────┘
              │ TCP connection
              ▼
┌──────────────────────────┐
│      PostgreSQL DB       │
│                          │
│  atopbank database       │
│  tables & data           │
│  stored on disk          │
└──────────────────────────┘
```