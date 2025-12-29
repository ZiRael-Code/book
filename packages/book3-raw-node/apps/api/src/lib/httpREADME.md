
*What this file is:*

This is how the server talks back to the client (browser/app).

*What it does:*

1. Sends JSON responses in a correct way.
2. Sets the correct headers.
3. Sends errors in one same format.

*Why we need it:*

1. So every endpoint replies the same way.
2. So frontend developers don’t get confused.

Success example:

{ "status": "ok" }


Error example (always same shape):

{
  "error": {
    "code": "INVALID_EMAIL",
    "message": "Valid email is required"
  }
}


Big rule:
Always send proper JSON + proper HTTP status code.

*HTTP status codes*

1. 1x - Informational (rarely used in APIs)

“I’m still working on it…”

100 Continue – You can keep sending the request

101 Switching Protocols – Changing protocol (e.g. HTTP → WebSocket)

You almost never use these in normal REST APIs.

2.  2xx - Success

“Everything worked 👍”

Most common

200 OK – Request worked (GET, login, update)

201 Created – Something new was created (signup, create account)

204 No Content – Success, but nothing to return (delete)

Others

202 Accepted – Request accepted, still processing

206 Partial Content – Only part of data sent (streams, ranges)

In AtopBank:

POST /signup → 201

GET /me → 200

DELETE /card → 204

3. 3xx - Redirects

“Go somewhere else”

301 Moved Permanently

302 Found

304 Not Modified – Used with caching

Rare in APIs (mostly for browsers).

4. 4xx - Client Errors

“The user did something wrong”

Authentication & permission

400 Bad Request – Bad input (missing fields, wrong format)

401 Unauthorized – Not logged in / invalid token

403 Forbidden – Logged in but not allowed

404 Not Found – Route or resource not found

Validation & conflicts

409 Conflict – Duplicate data (email already exists)

422 Unprocessable Entity – Valid JSON but invalid values

Rate / size / method

405 Method Not Allowed – GET used instead of POST

413 Payload Too Large – Request body too big

415 Unsupported Media Type – Not JSON

429 Too Many Requests – Rate limited

In AtopBank:

Wrong password → 401

Email already used → 409

Missing password → 400

Unknown endpoint → 404

5. 5xx - Server Errors

“The server messed up 😢”

Most common

500 Internal Server Error – Something unexpected broke

502 Bad Gateway – Upstream service failed

503 Service Unavailable – Server down / overloaded

504 Gateway Timeout – Server waited too long

In AtopBank:

Database down → 503

Bug in code → 500