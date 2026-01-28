---
outline: deep
---

# Read Me First - What “Raw” Means Here

### Welcome...


This is not documentation.
This is a **book about understanding backend systems by building one**.

By the end of this book, you will have built **AtopBank**  a real backend API using nothing but:
- Node.js core libraries
- PostgreSQL with raw SQL
- Small, intentional utilities

No frameworks.
No ORMs.
No magic.

---

## Who This Book Is For

This book is for you if:

- You’re a **junior developer** who wants real understanding
- You’re tired of copying code you don’t fully understand
- You want skills that transfer across stacks and frameworks
- You want to think like a backend engineer, not a tool user

If you’re looking for shortcuts, this book is not for you.

---

## What “Raw” Means (And Why It Matters)

“Raw” means we remove abstractions until only **fundamentals** remain.

In this book:
- We do **not** use Express, Nest, or Koa
- We do **not** use Prisma or any ORM
- We do **not** hide HTTP, SQL, or security behind helpers

Why?

> If you can build it raw, you can master any framework later.

Frameworks come and go.
Fundamentals compound.

---

## How This Book Works

Each chapter follows the same structure:

1. **Why the concept exists** (real-world reasoning)
2. **What we’re building**
3. **The core idea**
4. **Step-by-step implementation**
5. **Common mistakes**
6. **A working checkpoint**

You will always know:
- what you’re learning
- why it matters
- where the code lives

---

## How to Read This Book (Important)

This book is meant to be **used**, not skimmed.
=
Your loop should be:

1. Read the chapter in your browser
2. Open `apps/api` in VS Code
3. Implement the steps
4. Run the API or tests
5. Move on only when it works

> Understanding beats speed !!!.

---

## The Promise 

If you complete this book honestly, you will:
- understand HTTP deeply
- understand authentication properly
- understand SQL and transactions
- understand how real backend systems are built

You won’t just *use* backend frameworks.
You’ll **own** them.

---
```ts
┌──────────────────────────────┐
│        YOU (The Builder)     │
│  Curious • Learning • Raw   │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│        HTTP Requests         │
│   (What the Internet Speaks) │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│        Node.js Core          │
│   (No frameworks. No magic.) │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│     Business Logic (You)     │
│  Auth • Accounts • Transfers│
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│     Raw SQL + PostgreSQL     │
│   (Data you fully control)  │
└──────────────────────────────┘

```

➡️ Next: [Part I — HTTP From First Principles](/part-1-http/01-smallest-server)
