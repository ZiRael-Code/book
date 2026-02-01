---
outline: deep
---

# 22. Dockerizing AtopBank (Same App Everywhere)

Docker exists to solve one painful sentence:

> “It works on my machine.”

In banking software, that sentence is dangerous.

Docker lets us package AtopBank so it behaves the **same**:
- on your laptop
- on your teammate’s laptop
- on a server

No surprises.

---

## The Story

Imagine this:

You run AtopBank locally.
Everything works.

You send it to a friend.
It breaks.

Why?
- different Node version
- missing env variables
- missing dependencies

Docker says:
> “Put everything the app needs in one box.”

That box is called an **image**.

---

## What Docker Will Do For Us

For AtopBank, Docker will:
- fix the Node version
- install dependencies once
- run the app the same way everywhere

Docker will **not**:
- change your code
- add magic
- replace learning

---

## Our Docker Philosophy (Important)

This is a **learning book**, so:
- no fancy optimizations
- no hidden tricks
- clear steps

We want you to *understand* what Docker is doing.

---

## 1) Dockerfile 

The Dockerfile is a recipe.

It tells Docker:
> “Here’s how to build my app.”

---

### File Location
📄 `apps/api/Dockerfile`

```dockerfile
# Step 1: choose the exact Node version
FROM node:20-alpine

# Step 2: create a working directory inside the container
WORKDIR /app

# Step 3: copy package files first (for caching)
COPY package.json package-lock.json ./

# Step 4: install dependencies
RUN npm install --production

# Step 5: copy the rest of the source code
COPY . .

# Step 6: expose the port the app listens on
EXPOSE 3000

# Step 7: start the server
CMD ["node", "dist/server.js"]
Explain Like a Baby
FROM node:20-alpine
→ “Use Node 20, lightweight Linux”

WORKDIR /app
→ “All commands happen inside /app”

COPY package.json
→ “Copy dependency list first”

RUN npm install
→ “Install dependencies inside the box”

COPY . .
→ “Copy our app code”

EXPOSE 3000
→ “This app listens on port 3000”

CMD
→ “This is how the app starts”
```

## 2) .dockerignore (What NOT to Copy)

Docker copies files into the image.

We must tell it what to ignore.

File Location

📄 apps/api/.dockerignore
```dockerignore
node_modules
.git
.env
dist
```
Explanation...

node_modules → installed inside container

.env → secrets should not be baked into image

dist → rebuilt cleanly

## 3) Environment Variables (No Secrets in Code)
Docker images are generic.

Secrets come from the outside.

At runtime, we pass:
```fs
DATABASE_URL

JWT_SECRET

ADMIN_API_KEY
```

Example (local run)
```docker
docker run -p 3000:3000 \
  -e DATABASE_URL=postgres://... \
  -e JWT_SECRET=secret \
  -e ADMIN_API_KEY=supersecret \
  atopbank-api
  ```
Explanation..

image stays the same

environment changes per setup

this is how real production works

## 4) Docker Compose (API + Database)
Running Postgres manually is annoying.

Docker Compose lets us run multiple containers together.

File Location

📄 apps/api/docker-compose.yml

```docker
version: "3.9"

services:
  api:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: atop
      POSTGRES_PASSWORD: atop
      POSTGRES_DB: atopbank
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:

  ```
Explanation...

api
→ our Node app container

db
→ Postgres container

depends_on
→ start DB before API

volumes
→ keeps DB data even after restart

## 5) Health & Ready with Docker
Docker can check endpoints automatically.

We already built:

/health

/ready

Now Docker can ask:

“Is this container healthy?”

This makes AtopBank production-ready.

## 6) How You Should Use Docker 

Learn the app first (Node, SQL, auth)

Use Docker to freeze behavior

Never debug Docker before debugging code

Docker is a tool, not the goal.

## Checkpoint
You’re done when:

- docker build . succeeds
- docker compose up runs API + Postgres
- /health returns OK
- /ready returns OK when DB is up
- App behaves the same on every machine