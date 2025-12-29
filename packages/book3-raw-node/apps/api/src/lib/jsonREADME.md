JSON.TS

This is the server’s body reader.

*What it does:*

1. Reads the request body (the JSON the user sends).
2. Reads it in small pieces (chunks), not all at once.
3. Stops if the body is too big.

*Why we need it:*
1. Requests come in pieces like LEGO blocks.
2. If someone sends a giant body, it can crash the server.
3. We protect the server with a max size.

**What can go wrong:*

- Empty body → error
- Bad JSON → error
- Too big → error

*Big rule:*
Read safely. Don’t trust random input.