---
outline: deep
---

# 21. Postman Collection & Documentation

Postman:
> “How to actually use it.”

This chapter makes AtopBank easy to test and easy to demo.

---

## The Story

A bug happens.

You don’t want to open the UI.
You want to reproduce the request directly.

That’s what Postman/curl are for.

---


### The variables 
Your environment should have:
- `baseUrl` → `http://localhost:3000`
- `accessToken` → set after login
- `refreshToken` → set after login
- `adminKey` → `supersecret`

---

## 3) The “happy path” flow (the real AtopBank workflow)

1) Signup
2) Login (save tokens)
3) Submit KYC
4) Admin approves
5) Create wallet
6) Add payee
7) Send money
8) View statement
9) View notifications
10) Settings/logout

That flow matches your design exactly.

---

## 4) requests.http (same idea, lightweight)

This is great for VS Code REST Client users.

📄 `apps/api/requests.http`

Example structure:

```http
### health
GET http://localhost:3000/health

### ready
GET http://localhost:3000/ready

### signup
POST http://localhost:3000/v1/auth/signup
Content-Type: application/json

{
  "fullName": "henry jane",
  "email": "henry@atopbank.com",
  "password": "Password123"
}

### login
POST http://localhost:3000/v1/auth/login
Content-Type: application/json

{
  "email": "henry@atopbank.com",
  "password": "Password123"
}
```
Explanation...

It’s not Postman, but it’s very simple

It lives in your repo

Anyone can run it without importing tools

---

Auth & User
```documentation
Health: GET /health

Ready: GET /ready

Signup: POST /v1/auth/signup

Login: POST /v1/auth/login

Refresh Token: POST /v1/auth/refresh

Logout: POST /v1/auth/logout

Current User: GET /v1/me
```

KYC Flow
```documentation
Step 2 - Profile

POST /v1/kyc/profile

Step 3 - Document

POST /v1/kyc/document

Status

GET /v1/kyc/status
```

Admin - KYC
```documentation

List Pending: GET /admin/v1/kyc/pending

View User KYC: GET /admin/v1/kyc/users/:userId

Approve: POST /admin/v1/kyc/users/:userId/approve

Reject: POST /admin/v1/kyc/users/:userId/reject

Header: x-admin-key
```

Wallets & Accounts
```documentation

Create Wallet: POST /v1/accounts

List Wallets: GET /v1/accounts
```

Money
```documentation
Top up: POST /v1/topups

Internal Transfer: POST /v1/transfers

Send to Payee: POST /v1/send-money
```
Transactions & Statements
```documentation
Transactions: GET /v1/transactions

Monthly Statement (JSON): GET /v1/statements/:accountId

Statement (CSV): GET /v1/statements/:accountId.csv
```

Payees
```documentation
Create: POST /v1/payees

List / Search: GET /v1/payees

Get One: GET /v1/payees/:payeeId

Delete: DELETE /v1/payees/:payeeId
```

Cards
```documentation
Issue Virtual Card: POST /v1/cards

List Cards: GET /v1/cards

Get Card: GET /v1/cards/:cardId

Reveal Details: GET /v1/cards/:cardId/reveal

Block / Unblock:

POST /v1/cards/:cardId/block

POST /v1/cards/:cardId/unblock
```
 Notifications
 ```documentation

List: GET /v1/notifications

Mark One Read: POST /v1/notifications/:id/read

Mark All Read: POST /v1/notifications/read-all
```
Settings & Security
```documentation

Profile: GET / PATCH /v1/profile

Change Password: POST /v1/security/change-password
```

Sessions:
```documentation

List: GET /v1/security/sessions

Revoke: DELETE /v1/security/sessions/:sessionId
```

Notification Preferences:
```documentation
Get: GET /v1/notification-preferences

Update: PUT /v1/notification-preferences
```

`Details about the request body, required headers, and authorization can be found in the request.http file. Please refer to it for the exact structure and examples used by each endpoint.`