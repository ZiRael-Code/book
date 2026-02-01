---
outline: deep
---

# 20. Health, Readiness & Structured Logs

Now AtopBank works… but production systems have one extra job:

> “Tell us what is happening.”

When something breaks, you need answers fast.

So we add:
- `/health` (am I alive?)
- `/ready` (can I work?)
- structured logs (what happened per request?)
- request IDs (follow one request across logs)

---

## The Story

Imagine your app is deployed.

A user says:
> “Login is not working.”

You ask:
- Is the server running at all? → **/health**
- Is the database reachable? → **/ready**
- Which exact request failed? → **requestId + logs**

Without these, you are blind.

---

## 1) `/health` - “Am I alive?”

### File
📄 `apps/api/src/handlers/health.ts`

```ts
import type { Handler } from "../types.js";

export const health: Handler = async (_req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok" }));
};
```
Explanation...

This endpoint does not check database

It only proves: Node server is running and responding

If /health fails, your server is down.

## 2) `/ready` - “Am I ready to serve traffic?”
### File

📄 apps/api/src/handlers/ready.ts

```ts
import type { Handler } from "../types.js";
import { pool } from "../db/client.js";

export const ready: Handler = async (_req, res) => {
  try {
    // A tiny DB query that proves the DB is reachable
    await pool.query("SELECT 1");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
  } catch {
    // 503 means "alive but not safe to serve"
    res.writeHead(503, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "down" }));
  }
};
```

Explanation...

If DB is reachable → ready returns 200

If DB is down → ready returns 503

This helps load balancers / Docker know whether to send traffic

## 3) Request IDs — “Follow one request”
File

📄 apps/api/src/middleware/withRequestId.ts

```ts
import { randomUUID } from "node:crypto";
import type { Handler } from "../types.js";

export function withRequestId(inner: Handler): Handler {
  return async (req, res, ctx) => {
    const incoming = req.headers["x-request-id"];
    ctx.requestId = typeof incoming === "string" ? incoming : randomUUID();

    // send it back so clients can report it
    res.setHeader("x-request-id", ctx.requestId);

    await inner(req, res, ctx);
  };
}
```
Explanation...

If a request already has x-request-id we reuse it

If not, we generate one

Every log line for this request should include this ID

So when someone says:

“Transfer failed”
You ask:
“What’s the x-request-id?”

## 4) Structured Logs - “Logs that computers can read”

File

📄 apps/api/src/lib/log.ts

```ts
export type LogLevel = "info" | "error";

export function log(level: LogLevel, data: Record<string, unknown>) {
  // One JSON line per log = easy to search and filter
  console.log(JSON.stringify({ level, ...data }));
}
```
Explanation...

Logs are JSON objects

Tools can filter by requestId, path, durationMs, etc.

## 5) Timing each request

File

📄 apps/api/src/middleware/withLogging.ts
```ts

import type { Handler } from "../types.js";
import { log } from "../lib/log.js";

export function withLogging(inner: Handler): Handler {
  return async (req, res, ctx) => {
    const start = Date.now();

    try {
      await inner(req, res, ctx);
    } finally {
      const durationMs = Date.now() - start;

      log("info", {
        requestId: ctx.requestId,
        method: req.method,
        path: ctx.path,
        statusCode: ctx.statusCode,
        durationMs
      });
    }
  };
}
```
Explanation...

start a stopwatch when request begins

stop it when request ends

log method/path/status/time

Now you can spot slow endpoints.

## 6) Wire them into your server
Where you compose middleware depends on your project, but the idea is always:

- parse request

- create ctx

wrap handler with:

- requestId

- logging

- error handler

Example order:
```
withRequestId(withLogging(withErrors(routerHandler)))
```

Checkpoint
You’re done when:

GET /health returns { "status": "ok" }

GET /ready ...returns OK when DB is up, 503 when DB is down

Every request responds with x-request-id

Logs are JSON and include requestId, path, durationMs