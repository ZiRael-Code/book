---
outline: deep
---

# 2. Routing Without a Framework




Last chapter, we built a tiny server with one job:

> “If someone asks `/health`, reply: `ok`.”

It worked.  
But it also showed a new problem.

As soon as your API has more than one endpoint, your server starts hearing different knocks on the door:

- “Hello, I want `/v1/users`.”
- “I need `/v1/accounts`.”
- “Show me `/v1/transactions`.”

If your server answers everything the same way, your API becomes useless.

So we need a simple system that can say:

> “Oh… you’re asking for **this path** with **this method**.  
> Let me send you to the right code.”

That system is called **routing**.

---

## A Simple Story: The Security Guard

Imagine a big office building.

People come in and say:

- “I’m going to **Accounts Department**.”
- “I’m going to **Customer Support**.”
- “I’m going to **Transactions**.”

If there is no security guard, everybody will enter anywhere. Chaos.

So the building has a security guard at the entrance.

The guard asks two things:
1. **What do you want to do?** (GET / POST)
2. **Where are you going?** (the path)

Then the guard points you to the right room.

In your API:
- the **security guard** is the router
- the **rooms** are your handler functions
```ts
          ┌────────────────────┐
          │   Incoming Request │
          │  (a knock at door) │
          └─────────┬──────────┘
                    │
                    ▼
        ┌──────────────────────────┐
        │        ROUTER (Guard)     │
        │ asks 2 questions:         │
        │  1) Method?  (GET/POST)   │
        │  2) Path?    (/v1/users)  │
        └─────────┬────────────────┘
                  │
      ┌───────────┼───────────┬───────────┐
      │           │           │           │
      ▼           ▼           ▼           ▼
┌──────────┐ ┌────────────┐ ┌──────────────┐ ┌──────────────────┐
│ /health  │ │ /v1/users   │ │ /v1/accounts  │ │ /v1/transactions  │
│ handler  │ │ handler     │ │ handler       │ │ handler           │
└──────────┘ └────────────┘ └──────────────┘ └──────────────────┘

(If the guard doesn’t recognize you → 404 Not Found)

```
---

## What We’re Building

We will add 3 new endpoints (stubs for now):

- `GET /v1/users`
- `GET /v1/accounts`
- `GET /v1/transactions`

They will return simple JSON like this:

```json
{ "users": [] }
```

No database yet.
No business logic yet.
Just routing.

The Core Idea (Very Simple)
Routing is just a lookup:

(method + path) → handler function

Example:

GET + /v1/users → run handleUsers()

That’s it.

### Step 1- Get the Path Cleanly

When a request reaches your server, Node gives you this value:

```ts
req.url
```

The problem is that req.url is not always clean.

..For example, a client can send requests like:

```ts
/v1/users
/v1/users?limit=10
/v1/users?page=2
```

If we try to match routes using req.url directly, this will break:

```ts
"/v1/users" !== "/v1/users?limit=10"
```

But for routing, we only care about where the user is going, not the extra details.

> The Solution: Use URL :
Node provides the URL class to safely split a request into parts.

```ts
const url = new URL(req.url ?? "/", `http://${req.headers.host}`);
```
This line creates a proper URL object from the incoming request.

We add http://${req.headers.host} because URL expects a full address, not just a path.

Extract Only the Path

const pathname = url.pathname;
Now pathname is always clean:

Request	pathname

```ts
/v1/users =	/v1/users
/v1/users?limit=10	= /v1/users
/v1/accounts?page=2	= /v1/accounts
```

All query parameters are removed automatically.

Routing ignores the query parameters, but your handler can still read it.

This is exactly what we want for routing.

### Step 2-  Make a Route Table (A Simple List)

A route table is just a list of rules.

```ts
const routes = [
  { method: "GET", path: "/health", handler: handleHealth },
  { method: "GET", path: "/v1/users", handler: handleUsers },
  { method: "GET", path: "/v1/accounts", handler: handleAccounts },
  { method: "GET", path: "/v1/transactions", handler: handleTransactions },
];
```

..Think of it like a contact list:
If someone calls this number → send them to this person.

### Step 3 - Find the Matching Route

```ts
const route = routes.find(r => r.method === method && r.path === pathname);
```


- If we don’t find anything, return 404.

```ts
if (!route) {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: { code: "NOT_FOUND", message: "Route not found" } }));
  return;
}
```


If we find it, run the handler:
```ts
route.handler(req, res);
```


That’s routing!!!!

### Step 4- Stub Handlers 

At this stage, we don’t care about databases or real data yet.
We just want each route to return something valid.

To avoid repeating the same code again and again, we create one small helper that sends JSON responses.

A small JSON helper

This function does three things:

- sets the HTTP status code

- sets the response header to JSON

- sends the data back to the client
```ts
function sendJson(
  res: http.ServerResponse,
  status: number,
  data: unknown
) {
  res.writeHead(status, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}
```

Now we can reuse this function in every handler!!!!
```ts
Client sends:
  GET /v1/users?limit=10
        │
        ▼
┌──────────────────────────────┐
│ Node.js server receives req  │
│ req.method = "GET"           │
│ req.url    = "/v1/users?..." │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│ Clean the URL using URL()     │
│ pathname = "/v1/users"        │  ← query removed
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│ Route Table (list of rules)   │
│ (method + path) → handler     │
└───────────────┬──────────────┘
                │ find match
                ▼
        ┌───────────────┐
        │ Match found?   │
        └───────┬───────┘
                │Yes                 No
                ▼                    ▼
┌──────────────────────────────┐   ┌──────────────────────────┐
│ Call handler(req, res)       │   │ sendJson(res, 404, ...)   │
│ e.g. handleUsers()           │   │ { error: "Route not found"}│
└───────────────┬──────────────┘   └──────────────────────────┘
                │
                ▼
┌──────────────────────────────┐
│ sendJson helper returns JSON  │
│ { "users": [] }              │
└──────────────────────────────┘
```