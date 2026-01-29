---
outline: deep
---

# 10. Transactions & Atomicity (Money Must Be Safe)

In fintech, the scariest bug is not “server crash”.

The scariest bug is this:



> Money moved halfway.

Because halfway creates lies.

This chapter teaches the rule banks live by:

> Either everything happens, or nothing happens.

That rule is called **atomicity**, and it comes from the **ACID** rules of databases.

---

## A Simple Story

Imagine you transfer ₦10,000 from Account A to Account B.

Two steps must happen:

1. Subtract ₦10,000 from A  
2. Add ₦10,000 to B  

Now imagine light goes off after step 1.

- Account A has lost money  
- Account B did not receive it  

That is unacceptable in banking.

So we wrap both steps into one “all-or-nothing” box.

That box is a **transaction**.

---

## ACID (Explained Like a Newbie)

ACID is the set of rules that makes databases safe for money.

### A - Atomicity (All or Nothing)
If a transaction has 5 steps:
- either all 5 happen
- or none happen

No half transfer.

### C - Consistency (Rules Must Stay True)
The database must always obey its rules.
Example:
- balances should never become “invalid”
- foreign keys must still point to real rows

If a transaction would break rules, the database rejects it.

### I - Isolation (Transactions Don’t Interfere)
If two people transfer money at the same time, they should not corrupt each other’s results.

Each transaction behaves like it is happening alone.

### D - Durability (Once Saved, It Stays Saved)
After a transaction commits, even if the server crashes, the data stays.

---

## What We Are Building

We will learn to do this:

- Start a transaction  
- Run multiple SQL statements  
- Commit if all succeeds  
- Roll back if anything fails  

---

## The Core Words 

- **BEGIN** → “start transaction”
- **COMMIT** → “save everything”
- **ROLLBACK** → “undo everything”

---

## Step 1 - Why `pool.query()` Is Not Enough for Transactions

You already have a database **pool**.

Let’s start from the very beginning.

---

### What is `pool`?

Think of `pool` as **a box of database connections**.

- Postgres allows many connections
- Opening a new connection is expensive
- So instead of opening and closing connections every time, we reuse them

That reusable box is called a **connection pool**.

---

### What does `await pool.query()` really do?

When you write:

```ts
await pool.query("SELECT 1");
```

This is what actually happens behind the scenes:

The pool picks any free connection

It runs the SQL on that connection

It immediately releases the connection back to the pool

You do not control which connection is used.

That’s fine for single queries.

> Why is that a problem for transactions?
A transaction is not one query.

A transaction is:

BEGIN
QUERY 1
QUERY 2
QUERY 3
COMMIT

All of those must run on the same database connection.

But if you do this:
```ts
await pool.query("BEGIN");
await pool.query("UPDATE accounts ...");
await pool.query("UPDATE accounts ...");
await pool.query("COMMIT");
```
You are not guaranteed that:

BEGIN runs on connection A, the UPDATE runs on connection A

COMMIT runs on connection A

The pool might do this instead:

BEGIN → connection A

first UPDATE → connection B

second UPDATE → connection C

COMMIT → connection D

That breaks the transaction completely.

**Simple rule to remember:**

Transactions must stay on one connection.

pool.query() does not guarantee that.

The correct solution: pool.connect()

So instead of asking the pool to “run a query”, we ask it:

“Give me ONE connection and don’t switch it.”

```ts
const client = await pool.connect();
```
Now:

you control the connection, every query goes through the same client and the transaction stays intact

## Step 2 - Transaction Helper 
Now let’s build a helper that does transactions safely every time.

📄 apps/api/src/db/tx.ts

```ts
import { pool } from "./client";

export async function withTransaction<T>(
  fn: (client: any) => Promise<T>
) {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const result = await fn(client);

    await client.query("COMMIT");

    return result;
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}
```
Explanation...

const client = await pool.connect();

**Meaning:**

“Give me ONE database connection and don’t give it to anyone else yet.”

This connection is reserved for this transaction.

await client.query("BEGIN");

**Meaning:**

“Start a transaction on THIS connection.”

**From this moment:**

Postgres starts tracking changes

nothing is permanent yet...

```ts
const result = await fn(client);
```

This is the most important idea.

- fn is a function you pass in

- it receives the same client

- it can run many SQL queries

all of them stay inside the same transaction...

**Example:**

```
withTransaction(() => {
  UPDATE A
  UPDATE B
  INSERT C
})
```
All grouped together.

await client.query("COMMIT");

**Meaning:**

“Everything worked. Save all changes permanently.”

Once COMMIT runs:

changes are written to disk

- data becomes durable

- other transactions can see the changes

catch → ROLLBACK

If any error happens:

> await client.query("ROLLBACK");

**Meaning:**

“Forget everything that happened since BEGIN.”

Even if:

one UPDATE succeeded...

another failed...

Postgres undoes all of them.

**This is atomicity.**

finally → client.release();

This is extremely important.

Meaning:

>“I’m done. Give this connection back to the pool.”

If you forget this:

connections stay locked

pool runs out of connections

your app freezes

## Step 3 - Transfer Example (Re-explained)

```ts
return withTransaction(async (client) => {
  await client.query(
    `UPDATE accounts
     SET balance_kobo = balance_kobo - $1
     WHERE id = $2`,
    [amountKobo, fromId]
  );

  await client.query(
    `UPDATE accounts
     SET balance_kobo = balance_kobo + $1
     WHERE id = $2`,
    [amountKobo, toId]
  );

  return { ok: true };
});
```
What’s happening...

...Start transaction

...Remove money from sender

...Add money to receiver

If both succeed → commit

If any fails → rollback

No half transfer.
No lost money.
No lies.

Why This Matters (Tie Back to ACID)

Atomicity → either both updates happen or none

Consistency → database rules stay true

Isolation → concurrent transfers don’t corrupt each other

Durability → committed money survives crashes

>Remember This...

pool.query() → “just run this query somewhere”

pool.connect() → “give me a connection I control”

Transactions need control! 
```ts
                 ┌───────────────────────────────┐
                 │        BUSINESS ACTION         │
                 │   Transfer ₦10,000 A → B       │
                 └───────────────┬───────────────┘
                                 │
                                 ▼
          ┌──────────────────────────────────────────┐
          │           WITHOUT TRANSACTION             │
          │                                          │
          │  UPDATE A (A - 10,000)                 │
          │         POWER FAIL                     │
          │  UPDATE B (B + 10,000)                 │
          │                                          │
          │  Result:                                 │
          │   - A lost money                         │
          │   - B did not receive                    │
          │   - Database is lying                 │
          └──────────────────────────────────────────┘

                                 ✖ NOT ACCEPTABLE ✖

                                 ▼

┌──────────────────────────────────────────────────────────────────┐
│                    THE TRANSACTION (SAFE BOX)                     │
│                                                                  │
│  BEGIN                                                           │
│    UPDATE accounts SET balance = balance - amount (A)            │
│    UPDATE accounts SET balance = balance + amount (B)            │
│  COMMIT  → save everything                                       │
│                                                                  │
│  OR                                                              │
│                                                                  │
│  ROLLBACK → undo everything                                      │
│                                                                  │
│  Rule: Either ALL steps happen, or NONE happen                   │
└──────────────────────────────────────────────────────────────────┘

                                 ▼

┌──────────────────────────────────────────────────────────────────┐
│                 HOW POSTGRES CONNECTIONS WORK                     │
│                                                                  │
│  Pool = box of reusable DB connections                            │
│                                                                  │
│   ┌────────┐  ┌────────┐  ┌────────┐                             │
│   │ Conn A │  │ Conn B │  │ Conn C │                             │
│   └────────┘  └────────┘  └────────┘                             │
│                                                                  │
│  pool.query("SQL") → ANY free connection                          │
│                                                                  │
│  Good for single queries                                          │
│  BAD for transactions                                           │
└──────────────────────────────────────────────────────────────────┘

                                 ▼

┌──────────────────────────────────────────────────────────────────┐
│              WHY pool.query() BREAKS TRANSACTIONS                │
│                                                                  │
│  pool.query("BEGIN")        → Conn A                              │
│  pool.query("UPDATE A")     → Conn B                              │
│  pool.query("UPDATE B")     → Conn C                              │
│  pool.query("COMMIT")       → Conn A                              │
│                                                                  │
│   BEGIN and COMMIT are not on the same connection               │
│   This is NOT a real transaction                                │
└──────────────────────────────────────────────────────────────────┘

                                 ▼

┌──────────────────────────────────────────────────────────────────┐
│              THE CORRECT SOLUTION: pool.connect()                │
│                                                                  │
│  const client = await pool.connect();                             │
│                                                                  │
│  ┌────────────────────────────────────────────┐                  │
│  │   ONE RESERVED CONNECTION (client)          │                  │
│  │                                            │                  │
│  │   BEGIN                                    │                  │
│  │     UPDATE A                               │                  │
│  │     UPDATE B                               │                  │
│  │   COMMIT  (or ROLLBACK on error)            │                  │
│  │                                            │                  │
│  └────────────────────────────────────────────┘                  │
│                                                                  │
│  client.release() → return connection to pool                    │
└──────────────────────────────────────────────────────────────────┘

                                 ▼

┌──────────────────────────────────────────────────────────────────┐
│              withTransaction(fn) HELPER                           │
│                                                                  │
│  1. pool.connect() → get ONE connection                           │
│  2. BEGIN                                                         │
│  3. run fn(client)                                                │
│  4. COMMIT  (success)                                             │
│     or                                                            │
│     ROLLBACK (failure)                                            │
│  5. client.release()                                              │
│                                                                  │
│  Result:                                                         │
│   ✔ No half transfers                                            │
│   ✔ No lies                                                      │
│   ✔ Money is safe                                                │
└──────────────────────────────────────────────────────────────────┘

                                 ▼

┌──────────────────────────────────────────────────────────────────┐
│                     ACID GUARANTEE                               │
│                                                                  │
│  Atomicity   → all or nothing                                    │
│  Consistency → rules stay true                                   │
│  Isolation   → concurrent transfers don't clash                  │
│  Durability  → committed money survives crashes                  │
└──────────────────────────────────────────────────────────────────┘
```