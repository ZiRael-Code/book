*This is the app’s special error card.*

What it does:
1. Creates a special error type called AppError.

AppError always has:

1. a status code (like 400, 401)
2. a code name (like UNAUTHORIZED)
3. a message to explain the problem

*Why we need it:*

1. So we can stop an endpoint cleanly and send a nice error response.
2. So we don’t repeat error logic everywhere.

Example:

“You are not logged in” → status 401

Big rule:
Use AppError for mistakes we expect (bad input, not logged in, etc.)