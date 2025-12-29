Purpose of This Folder Structure

This project is structured to teach backend engineering from first principles, without hiding anything behind frameworks like Express or NestJS etc.

Every folder has one responsibility, If you understand this structure, you can understand any backend project later.

*Top-Level Structure*

apps/
  api/

apps/
Used when you want multiple applications later (e.g. admin API, worker, public API etc).

api/
This is the AtopBank Core API.

Inside src, we have.....

src/
  server.ts
  router.ts
  routes.ts
  types.ts

1. server.ts

The entry point of the application
Starts the HTTP server, Runs database migrations and Listens on a port
Think of this as: “Turn the engine on”

2. router.ts

Receives every HTTP request, Matches requests to routes, Applies middleware (auth, error handling, logging)
Think of this as: “Traffic control for requests”

3. routes.ts

This is simple list of all API routes. It maps HTTP method, URL path, handler function
This replaces what Express normally does automatically.

4. types.ts

This efines shared TypeScript types, especially: RequestContext, Handler. This keeps the whole app consistent and safe.


- Feature Folders
handlers/
domain/
db/
lib/

1. handlers/

Very thin files, it deals with: Reading request body, Calling domain logic, Sending HTTP responses, Handlers do not contain business logic.

2. domain/

This is here real business logic lives. No HTTP, No database queries. Just rules and decisions

Example:

“Can this user log in?”

“Is this password valid?”

“Should we issue tokens?”

4. db/

All database-related code. PostgreSQL only, Raw SQL, No ORM. This teaches how databases actually work.

5. lib/

Small reusable utilities

Think of this as: “The tiny framework we build ourselves”

6. migrations/

SQL files that define the database structure, it is applied in order, version controlled


Why This Structure Is Good for Learning

- You see everything

- Nothing is hidden

- You can trace a request:

server → router → middleware → handler → domain → db

That’s how professional backend systems work!