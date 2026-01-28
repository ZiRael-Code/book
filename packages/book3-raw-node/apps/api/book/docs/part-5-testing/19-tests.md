---
outline: deep
---
# 19. Testing 

Testing is not about proving you are smart.

Testing is about sleeping well.

This chapter is written for **people who have never written tests before** — especially backend developers who say:

> “I’ll add tests later.”

This chapter explains **what tests are**, **why they exist**, and **how they fit into AtopBank** — without writing a single line of test code.

---

## The Story (Why Tests Exist)

Imagine this situation.

You change one small thing:
- maybe a SQL query
- maybe auth logic
- maybe KYC approval flow

You deploy.

Suddenly:
- login breaks
- transfers fail
- admin dashboard crashes

Nobody touched those parts but they broke.

This is why tests exist.

Tests answer one question:

> “Did I accidentally break something?”

---

## Two Kinds of Tests (That’s All You Need)

In real systems, there are many types of tests.

For AtopBank, we only need **two**:

1) **Unit Tests**  
2) **Integration Tests**

If you understand these two, you understand testing.

---

# 1) Unit Tests (Small, Fast, Local)

## What Is a Unit Test?

A unit test tests **one small thing in isolation**.

Examples in AtopBank:
- password hashing logic
- token verification logic
- validation helpers
- small pure functions

A unit test does NOT:
- start a server
- talk to a real database
- call real APIs

Think of unit tests like this:

> “If I give this function X, does it return Y?”

---

## Unit Test Story

Imagine a vending machine.

You press **₦100**.
You expect **a bottle of water**.

A unit test checks:
- coin in
- item out

It does NOT check:
- power supply
- security guard
- the building

Just the machine logic.

---

## What Unit Tests Give You

- They run fast (milliseconds)
- They catch logic mistakes early
- They make refactoring safe

For AtopBank:
- you can change password logic
- or token logic
- and know instantly if you broke it

---

## Examples of What You Would Unit Test 

In AtopBank, good unit test candidates are:

- Password hashing & verification
- Token creation & verification
- KYC status checks
- Utility helpers (date ranges, parsing, etc.)

You test **logic**, not infrastructure.

---

## When Unit Tests Fail

If a unit test fails, it usually means:
- a logic bug
- wrong assumption
- edge case not handled

That’s good.

It fails **before users feel pain**.

---

# 2) Integration Tests (Real Life Simulation)

## What Is an Integration Test?

An integration test tests **multiple parts working together**.

In AtopBank, that means:
- HTTP request
- router
- middleware
- database
- response

Integration tests are closer to **real usage**.

---

## Integration Test Story

Unit tests are like testing a car engine on a table.

Integration tests are like:
> “Let’s drive the car and see if it works.”

You turn the key.
The engine starts.
You move forward.

That’s integration.

---

## What Integration Tests Cover in AtopBank

Integration tests answer questions like:

- Can a user sign up?
- Can a user log in?
- Can a pending user be blocked?
- Can admin approve KYC?
- Can an approved user create a wallet?
- Can money move safely?

These are **flows**, not functions.

---

## Why Integration Tests Need a Database

AtopBank is database-heavy:
- users
- wallets
- transactions
- KYC states

So integration tests:
- spin up a **real Postgres**
- run migrations
- insert test data
- clean up afterward

This makes them slower but realistic.

---

## The Testing Pyramid 

You don’t need a diagram.

Just remember this:

- Many **unit tests**
- Few **integration tests**

Why?
- unit tests are cheap
- integration tests are expensive

Both are important.

---

# Node’s Built-in Test Runner (`node:test`)

You do NOT need Jest.
You do NOT need Mocha.

Node already gives you:
- a test runner
- assertions
- async support

This matches our philosophy:
> **Raw Node, no magic**

---



---

# How Tests Fit Into AtopBank

### Unit Tests
- live next to logic
- test helpers, validators, crypto logic
- run very fast

### Integration Tests
- start the API
- talk to it like a real client
- use a real database
- verify real responses

Together, they create **confidence**.

---

## A Very Important Idea

Tests are not written because:
> “We are professional.”

Tests are written because:
> “We are human and we forget things.”

---

## When Should You Add Tests?

In AtopBank, the best order is:

1) Build feature
2) Make it work manually (Postman)
3) Understand the flow
4) Then write tests

This book intentionally teaches tests **after** features, so learners don’t feel overwhelmed.

---

## What This Chapter Wants You to Remember

If you remember only these things, you’re good:

- Unit tests = small logic
- Integration tests = real flows
- Node already supports testing
- Tests give confidence, not perfection

---

## Checkpoint 

You understand this chapter if:
- you know the difference between unit and integration tests
- you know what each one is responsible for
- you know where they fit in AtopBank
- testing no longer feels scary

---
