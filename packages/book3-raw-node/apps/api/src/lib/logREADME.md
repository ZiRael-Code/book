*What this file is:*
This is the app’s diary.

*What it does:*

1. It writes messages about what the server is doing.
2. It writes errors when something goes wrong.
3. Uses JSON logs so computers can read them easily.

*Why we need it:*

1. If a bug happens, logs help us find the problem.
- In production, logs are like “security camera footage” for the server.

Example log:

{"level":"info","event":"request","method":"POST","path":"/v1/auth/login"}

In logs, we have different levels such as 
- Trace: Very detailed logs, too much information
- Debug: Extra details to help developers understand what the app is doing
- Info: "Everything working as expected eg server starting, user logged in, request completed in a particular time. 
- Warn:“Something looks wrong, but still works”, eg Login failed (wrong password), Using deprecated API, Rate limit almost reached.


Big rule:
Every request should have a requestId so we can track it and dont log sensitive and information like the password 