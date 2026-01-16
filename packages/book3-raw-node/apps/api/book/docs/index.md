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
- [Read Me First — What “Raw” Means Here](/read-me-first)
- [Repo Structure (So You Never Get Lost)](/guide/repo-structure)

### Part I - HTTP From First Principles
- [1. The Smallest Useful Server](/part-1-http/01-smallest-server)
- [2. Routing Without a Framework](/part-1-http/02-routing)
- [3. Request Bodies, Validation & Errors](/part-1-http/03-bodies-validation-errors)
- [4. Configuration, Logging & Environments](/part-1-http/04-config-logging-envs)

### Part II - Security & Auth (Bare Essentials)
- [5. Users & Passwords](/part-2-auth/05-users-passwords)
- [6. Sessions & JWT (Access / Refresh)](/part-2-auth/06-sessions-jwt)

### Part III - PostgreSQL with Raw SQL
- [7. Postgres Setup & Connections](/part-3-postgres/07-postgres-setup)
- [8. SQL Migrations (No ORM)](/part-3-postgres/08-sql-migrations)
- [9. Transactions & Atomicity](/part-3-postgres/09-transactions)

### Part IV - Building AtopBank
- [10. KYC Flow (Signup → Pending → Approved)](/part-4-atopbank/10-kyc-flow)
- [11. Accounts & Wallets](/part-4-atopbank/11-accounts)
- [12. Payees & Send Money](/part-4-atopbank/12-payees-send-money)
- [13. Cards (Virtual, Simulated)](/part-4-atopbank/13-cards)
- [14. Statements & Reporting](/part-4-atopbank/14-statements)
- [15. Notifications](/part-4-atopbank/15-notifications)
- [16. Settings & Security](/part-4-atopbank/16-settings)

### Part V - Testing From the Ground Up
- [17. Unit Tests with node:test](/part-5-testing/17-unit-tests)
- [18. Integration Tests (API + DB)](/part-5-testing/18-integration-tests)

### Part VI - Observability & Docs
- [19. Health, Readiness & Logs](/part-6-obs-docs/19-health-ready-logs)
- [20. OpenAPI & /docs](/part-6-obs-docs/20-openapi-docs)

### Part VII - Docker & CI
- [21. Dockerizing API + DB](/part-7-docker/21-docker)
- [22. CI/CD with GitHub Actions](/part-7-docker/22-ci-cd)

### Part VIII - Security & Hardening
- [23. Hardening Checklist](/part-8-security/23-hardening)
- [24. Audit Logs & Safe Defaults](/part-8-security/24-audit-logs)
