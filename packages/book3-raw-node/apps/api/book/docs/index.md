---
layout: home

hero:
  name: "AtopBank Backend Book"
  text: "Raw Node.js + PostgreSQL from first principles"
  tagline: "A real-life backend book: learn fundamentals while building a mini-bank API  without frameworks, without ORMs."
  actions:
    - theme: brand
      text: Start Reading
      link: /read-me-first
    - theme: alt
      text: Tools You Need 
      link: /guide/tools-you-need
    - theme: alt
      text: View API Code
      link: /guide/repo-structure



features:
  - title: "Book-like reading experience"
    details: "Clean typography, side navigation, next/prev chapters, and a distraction-free layout."
  - title: "Build a real product"
    details: "Each chapter teaches a concept and immediately applies it to AtopBank."
  - title: "Raw engineering mastery"
    details: "If you can build it raw, you can master any framework later."
  - title: "Practical checkpoints"
    details: "Every chapter ends with a working checkpoint and exact files touched."
---
## Table of Contents

### Getting Started
- [Read Me First - What “Raw” Means Here](/read-me-first)
- [Tools You Need](/guide/tools-you-need)
- [Repo Structure (So You Never Get Lost)](/guide/repo-structure)

### Part I - HTTP From First Principles
- [1. The Smallest Useful Server](/part-1-http/01-smallest-server)
- [2. Routing Without a Framework](/part-1-http/02-routing)
- [3. Request Bodies, Validation & Errors](/part-1-http/03-bodies-validation-errors)
- [4. Configuration, Logging & Environments](/part-1-http/04-config-logging-envs)

### Part II - Security & Auth (Bare Essentials)
- [5. Users & Passwords](/part-2-auth/05-users-passwords)
- [6. Login](/part-2-auth/06-login)
- [6.5 Sessions & JWT (Access / Refresh)](/part-2-auth/6.5-sessions-jwt)
- [7. Protecting Routes (Auth Middleware)](/part-2-auth/07-protecting-routes)

### Part III - PostgreSQL with Raw SQL
- [8. Postgres Setup & Connections](/part-3-postgres/08-postgres-setup)
- [9. SQL Migrations (No ORM)](/part-3-postgres/09-sql-migrations)
- [10. Transactions & Atomicity](/part-3-postgres/10-transactions)

### Part IV - Building AtopBank
- [11. KYC Flow (Signup → Pending → Approved)](/part-4-atopbank/11-kyc-flow)
- [12. Accounts & Wallets](/part-4-atopbank/12-accounts)
- [13. Payees & Send Money](/part-4-atopbank/13-payees-send-money)
- [14. Cards (Virtual, Simulated)](/part-4-atopbank/14-cards)
- [15. Statements & Reporting](/part-4-atopbank/15-statements)
- [16. Notifications](/part-4-atopbank/16-notifications)
- [17. Admin](/part-4-atopbank/17-admin)
- [18. Settings & Security](/part-4-atopbank/18-settings)

### Part V - Testing From the Ground Up
- [19. Tests with node:test](/part-5-testing/19-tests)

### Part VI - Observability & Docs
- [20. Health, Readiness & Logs](/part-6-obs-docs/20-health-ready-logs)
- [21. Postman Collection & Curl Scripts](/part-6-obs-docs/21-postman)

### Part VII - Docker & CI
- [22. Dockerizing API + DB](/part-7-docker/22-docker)


### Part VIII - Security & Hardening
- [23. Hardening Checklist](/part-8-security/23-hardening-checklist)
- [24. Audit Logs & Safe Defaults](/part-8-security/24-audit-logs)
