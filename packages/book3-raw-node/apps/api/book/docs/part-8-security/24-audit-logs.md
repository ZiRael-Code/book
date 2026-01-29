---
outline: deep
---

# 24. Audit Logs & Safe Defaults

Logs tell you *what happened*.

Audit logs tell you *who did what*.

In fintech, audit logs are not optional.

---

## The Story

A user emails support:
> “I never sent that transfer.”

You don’t argue.
You check the audit log.

The audit log answers:
- who initiated the action
- when it happened
- what was affected

No guesswork.

---

## What Is an Audit Log?

An audit log is:
- append-only
- never edited
- never deleted casually

It records **important actions**, not everything.

---

## What AtopBank Audits

AtopBank records audit events for:
- KYC approval / rejection
- transfers
- card status changes
- admin actions
- account creation

Not:
- page views
- list queries
- harmless reads

Audit logs are for **state changes**.

---

## Database Design 

Audit logs store:
- who acted (user or admin)
- what action
- what resource
- when it happened

Once written:
- they are never modified

This is trust-by-design.

---

## Where Audit Logs Are Created

Audit logs are written:
- inside the same transaction
- as the business action

So:
- transfer + audit log succeed together
- or fail together

This guarantees consistency.

---

## Why This Matters

Audit logs help with:
- disputes
- compliance
- debugging
- trust

When something goes wrong, logs are facts.

---

## Safe Defaults (Why They Matter)

Many bugs come from missing data.

So AtopBank uses safe defaults:
- users start unverified
- cards start inactive
- transfers require explicit confirmation
- admin approval is explicit

Defaults are invisible security.

---

## A Quiet Truth

Most security is not dramatic.

It’s:
- careful defaults
- boring checks
- consistent rules

That’s why most good security code looks boring.

---

## Checkpoint

You understand this chapter if:
- you know what an audit log is
- you know when to write one
- you understand why defaults matter
- you see security as discipline, not fear

