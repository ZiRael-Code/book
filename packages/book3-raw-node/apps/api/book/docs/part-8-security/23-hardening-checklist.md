---
outline: deep
---

# 23. Hardening Checklist (Small Mistakes Cost Big)

Security is not about being clever.

Security is about **not being careless**.

This chapter is a checklist, the kind real teams use before shipping.

Not everything here is complex.
Most of it is boring.
That’s why it works.

---

## The Story

Most security incidents don’t happen because:
- someone broke encryption
- someone hacked crypto

They happen because:
- a check was forgotten
- a default was unsafe
- an assumption was wrong

Hardening is about **closing doors you forgot were open**.

---

## 1) Parameterized Queries 

AtopBank uses **raw SQL**.

That’s powerful and dangerous if misused.

### The rule
> Never build SQL using string concatenation.

### Good (what AtopBank does)
- SQL text stays static
- values are passed separately

Why?
- prevents SQL injection
- database treats values as data, not code

If one query breaks this rule, the whole system is at risk.

---

## 2) Authentication Before Authorization

In AtopBank:
- `requireAuth` answers: *who are you?*
- `requireApproved` answers: *are you allowed?*
- `requireAdmin` answers: *are you staff?*

These must be applied **in the correct order**.

### Example logic 
- login required before checking KYC
- admin key required before admin actions

Security fails when checks are skipped or misordered.

---

## 3) KYC Is a Gate, Not Decoration

KYC in AtopBank is not cosmetic.

Until a user is:
- `kyc_status = APPROVED`
- `user_status = ACTIVE`

They must not:
- send money
- create wallets
- issue cards

That’s why:
- core money routes use `requireApproved`
- settings/logout do NOT

This distinction matters.

---

## 4) Tokens Must Expire

AtopBank uses:
- short-lived access tokens
- long-lived refresh tokens

Why?
- access tokens reduce blast radius
- refresh tokens allow revocation

Never issue:
- infinite tokens
- tokens without expiry

Time limits are security.

---

## 5) Secrets Never Live in Code

In AtopBank:
- JWT secrets
- database URLs
- admin API key

All come from **environment variables**.

Never:
- commit secrets
- hardcode keys
- log secrets

If a secret leaks, rotate it immediately.

---

## 6) Admin Access Is Explicit

Admin routes do not rely on:
- user roles
- hidden flags
- UI tricks

They require:
- `x-admin-key`
- matched against `ADMIN_API_KEY`

Why?
- simple
- explicit
- impossible to “accidentally” access

This is intentional for learning clarity.

---

## 7) Error Messages Are Controlled

AtopBank errors:
- have codes
- have messages
- do NOT expose internals

Clients should never see:
- SQL errors
- stack traces
- internal paths

Errors are part of your API contract.

---

## 8) Defaults Must Be Safe

Defaults in AtopBank:
- new users start as `PENDING`
- wallets start empty
- notifications are enabled (safe)
- cards start as `PENDING`

Every default answers:
> “What if we forget to set something?”

Safe defaults protect you from future mistakes.

---

## Hardening Checklist (Final)

Before shipping, ask:

- Are all SQL queries parameterized?
- Do all protected routes require auth?
- Do money routes require approval?
- Do tokens expire?
- Are secrets outside the repo?
- Are admin routes locked?
- Are error messages safe?
- Are defaults conservative?

If yes → you’re doing fine.


