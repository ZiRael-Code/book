# AtopBank Backend Book

A practical backend engineering book that teaches **raw Node.js and PostgreSQL** by building a real mini-bank API from first principles.

No frameworks.  
No ORMs.  
No magic.

You learn the fundamentals by **actually building**.

---

## What This Book Teaches

This book walks you through:

- How HTTP servers work using `http.createServer`
- Routing without Express or Nest
- Authentication (JWT, sessions, refresh tokens)
- KYC flow (signup → pending → approved)
- Wallets, transfers, cards, notifications
- PostgreSQL with raw SQL
- Transactions and atomicity
- Dockerizing a backend
- Observability, docs, and security basics

All concepts are explained **slowly**, with stories and real code.

---

## Who This Book Is For

This book is for:
- Junior backend developers
- Frontend developers moving to backend
- Developers tired of “framework magic”
- Anyone who wants to truly understand how backend systems work

This book is **not** for:
- People looking for quick copy-paste frameworks
- People who don’t want to read explanations

---

## Project Structure

- `book/docs` → the book website (VitePress)
- `apps/api` → the AtopBank API code (raw Node.js + SQL)

You can read the book without touching the API code, or follow along and build it.

---

## Reading the Book (Local)

### Prerequisites
- Node.js v20+

in /book
### Install dependencies
npm install

### Start the book in development mode
npm run dev

Then open the URL shown in your terminal (usually http://localhost:5173

### Preview the Built Book (Production-like)
npm run build
npm run preview

This shows you the final static version of the book.