*What this file is:*
This is the app’s settings box.

*What it does:*

1. Reads important values from the .env file (like secret keys and the database link).
2. Makes sure the app does not start if something important is missing.

*Why we need it:*

1. If the database link is missing, the app can’t work.
2. If the secret keys are missing, login tokens won’t be safe.

- Simple example:

“PORT = 3000” means “run the server on door number 3000”.

“DATABASE_URL” tells the server where the database lives.

*Big rule:*
If a required setting is missing = stop early with a clear error.