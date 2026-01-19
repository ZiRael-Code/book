---
outline: deep
---

# 3. Request Bodies, Validation & Errors

So far, our server can **listen** and **route**.

But it still has a big limitation.

It can only *look* at the request, it cannot *receive* anything meaningful.

Right now, our server is like a receptionist who can hear **where you’re going**, but not **what you’re bringing**.

To build real APIs, we must teach the server how to:
1. read request bodies
2. validate incoming data
3. respond with clear, consistent errors

This chapter does that  **slowly, safely, and simply**.

---

## A Simple Story: The Delivery Box

Imagine a delivery person arrives at a building.

They don’t just shout:
> “I’m here!”

They carry a **box**.

Inside the box might be:
- a form
- credentials
- instructions

That box is the **request body**.

Your server must:
- open the box
- check what’s inside
- reject it if it’s broken
- accept it if it’s valid

---

## The Game Rule (Important)

In this book, we follow one rule:

> **Never trust user input. Ever.**

Not because users are bad but because bugs, typos, and attackers exist.

---

## Step 1 - Reading the Request Body (Safely)

In Node.js, request bodies arrive as **streams**, not complete objects.

That means data comes in **chunks**, not all at once.

We create a small helper function.

```ts
async function readJsonBody(req: http.IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let data = "";

    req.on("data", chunk => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(data || "{}");
        resolve(parsed);
      } catch {
        reject(new Error("INVALID_JSON"));
      }
    });
  });
}
```
This function:

- listens for incoming data

- combines the chunks

- parses JSON

- throws an error if JSON is invalid

## Step 2 - A Simple Validation Game

Think of validation like a checklist.

For example, a signup request must have:

- an email

- a password

If anything is missing, we stop the game.

```ts
function validateSignup(body: any) {
  if (!body.email) {
    return { ok: false, message: "Email is required" };
  }

  if (!body.password) {
    return { ok: false, message: "Password is required" };
  }

  return { ok: true };
}
```
..Very simple.
..Very readable.
..Very intentional.

## Step 3 - A Single Error Shape 

APIs become painful when every endpoint returns errors differently.

So we agree on one error format:

```ts
{
  "error": {
    "code": "...",
    "message": "..."
  }
}
```

> This is your API’s language.

## Step 4 - Sending Errors the Right Way

Let’s create a helper:

```ts
function sendError(
  res: http.ServerResponse,
  status: number,
  code: string,
  message: string
) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: { code, message } }));
}
``` 

Now every error looks the same.

## Step 5 - Putting It Together (Signup Example)

Imagine a player tries to sign up.

```ts
async function handleSignup(req: http.IncomingMessage, res: http.ServerResponse) {
  try {
    const body = await readJsonBody(req);

    const result = validateSignup(body);

    if (!result.ok) {
      sendError(res, 400, "VALIDATION_ERROR", result.message);
      return;
    }

    sendJson(res, 201, { message: "Signup successful (stub)" });
  } catch (err) {
    sendError(res, 400, "INVALID_JSON", "Request body must be valid JSON");
  }
}
```
This handler:

- reads input

- validates input

- sends clean errors

- never crashes

> What You Just Unlocked

You just taught your server how to:

- receive real data

- protect itself

- speak clearly when something goes wrong

...This is a huge milestone.

### Common Mistakes 

- Trusting user input

- Parsing JSON without try/catch

- Returning different error formats

- Letting errors crash the server

### Checkpoint

Test with invalid requests:

- missing fields

- broken JSON

- empty body

Your server should always:

- respond

- never crash

- explain what went wrong

> Why This Chapter Matters

Every bug, breach, and production incident starts with bad input.

Validation is not optional.
Errors are not noise.
They are communication.

