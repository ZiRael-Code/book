This is the server’s secret math toolbox.

*What it does:*

base64url
1. Turns data into a safe text that works inside tokens/URLs.

hmacSha256
2. Makes a signature (like a stamp) so nobody can fake tokens.

randomToken
3. Makes strong random strings that are hard to guess.

*Why we need it:*

1. Tokens must be safe.

Hackers should not be able to “guess” tokens.
2. If someone changes a token, the signature check fails.

Big rule:
Tokens must be signed, so they can’t be changed secretly.