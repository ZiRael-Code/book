# Repo Structure (So You Never Get Lost)

**Reading lives here**
- `apps/api/book/` → the book website

**Coding lives here**
- `apps/api/` → AtopBank API source code

## How to use the book
1) Read a chapter in the browser
2) Open `apps/api` in VS Code
3) Implement the steps
4) Run tests / requests.http
```ts
apps/
└─ api/
   ├─ src/
   │  ├─ server.ts                 - Node http server entry (createServer)
   │  ├─ routes.ts                 - route table: method + path -> handler
   │  ├─ router.ts                 - route matching + dispatch (URL/URLPattern)
   │  ├─ types.ts                  - shared types (Handler, Ctx, etc.)
   │  │
   │  ├─ handlers/                 - HTTP layer (thin): read req, call domain, send res
   │  │  ├─ health.ts
   │  │  ├─ me.ts
   │  │  ├─ auth.ts
   │  │  ├─ kyc.ts
   │  │  ├─ accounts.ts
   │  │  ├─ cards.ts
   │  │  ├─ payees.ts
   │  │  ├─ money.ts
   │  │  ├─ sendMoney.ts
   │  │  ├─ transactions.ts
   │  │  ├─ statements.ts
   │  │  ├─ notifications.ts
   │  │  ├─ settings.profile.ts
   │  │  ├─ settings.notification.ts
   │  │  ├─ settings.security.ts
   │  │  ├─ settings.session.ts
   │  │  ├─ admin.kyc.ts
   │  │  └─ admin.verification.ts
   │  │
   │  ├─ domain/                   - business logic (rules + stories)
   │  │  ├─ auth/
   │  │  │  ├─ auth.service.ts      - signup/login/refresh/logout orchestration
   │  │  │  ├─ onboarding.ts        - signup -> pending -> kyc required flow
   │  │  │  ├─ tokens.ts            - access/refresh token rules
   │  │  │  ├─ validators.ts        - auth input validation
   │  │  │  └─ README.md
   │  │  ├─ users/
   │  │  │  ├─ users.service.ts
   │  │  │  └─ validators.ts
   │  │  ├─ cards/
   │  │  │  ├─ cardFactory.ts       - generate last4, masked pan, expiry, etc.
   │  │  │  └─ cards.service.ts
   │  │  ├─ payees/
   │  │  │  └─ payees.service.ts
   │  │  ├─ money/
   │  │  │  ├─ money.service.ts     - balances, credit/debit rules
   │  │  │  └─ sendMoney.service.ts - transfer flow (uses tx)
   │  │  ├─ statements/
   │  │  │  └─ statements.service.ts
   │  │  ├─ security/
   │  │  │  └─ password.service.ts
   │  │  └─ profile/
   │  │     └─ profile.service.ts   - (if you have it; optional)
   │  │
   │  ├─ middleware/               - gates + cross-cutting concerns
   │  │  ├─ cors.ts
   │  │  ├─ error.ts                - converts thrown errors to JSON envelope
   │  │  ├─ requestId.ts            - creates requestId per request
   │  │  ├─ timing.ts               - durationMs logging
   │  │  ├─ auth.ts                 - requireAuth (access token)
   │  │  ├─ approved.ts              requireApproved (KYC approved + active)
   │  │  └─ admin.ts                 requireAdmin (x-admin-key)
   │  │
   │  ├─ db/                        - persistence layer
   │  │  ├─ client.ts               - pg Pool
   │  │  ├─ migrate.ts               - migration runner
   │  │  ├─ tx.ts                    withTransaction helper
   │  │  └─ repositories/            -raw SQL access (no business logic)
   │  │     ├─ users.repo.ts
   │  │     ├─ sessions.repo.ts
   │  │     ├─ kyc.repo.ts
   │  │     ├─ accounts.repo.ts
   │  │     ├─ payees.repo.ts
   │  │     ├─ cards.repo.ts
   │  │     ├─ transactions.repo.ts
   │  │     ├─ statements.repo.ts
   │  │     ├─ notifications.repo.ts
   │  │     ├─ profile.repo.ts
   │  │     └─ adminKyc.repo.ts
   │  │
   │  └─ lib/                       - small reusable building blocks
   │     ├─ http.ts                 - req/res helpers
   │     ├─ json.ts                  readJsonBody, safeParse
   │     ├─ errors.ts                - AppError + helpers
   │     ├─ log.ts                  - JSON logger
   │     ├─ config.ts                env loader/validator
   │     ├─ crypto.ts               - hashing helpers (password)
   │     ├─ cardCrypto.ts           - card masking / simulated crypto (if any)
   │     ├─ cursor.ts               - cursor pagination helpers
   │     ├─ params.ts               - URL params helpers
   │     ├─ months.ts               - month parsing helpers
   │     └─ validate.ts             - tiny validators
   │
   ├─ migrations/                   - SQL migrations (ordered)
   │  ├─ 0001_init.sql
   │  ├─ 0002_....sql
   │  └─ ...
   ├─ requests.http                 - manual API testing
   ├─ docker-compose.yml
   ├─ package.json
   ├─ .env
   └─ .env.example


```