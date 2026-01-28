---
outline: deep
---

# Tools You Need (Before We Begin)

Before we build **AtopBank**, let’s prepare your workspace.

This book is hands-on:
- you will run code
- break things (on purpose)
- fix them
- and understand *why* they broke

To make the journey smooth, you need a few tools.

Good news: they’re all **free**, **popular**, and **industry-standard**.

---

## The “No Stress” Rule

You do **not** need fancy setups.

You only need:
- a working Node install
- a code editor
- a database (we’ll run Postgres with Docker)
- a way to test the API (Postman or REST Client)

That’s all.

---

## Quick Download List (Fast Setup)

Use these links and install in this order:

1. **Node.js (LTS, v20+)** → https://nodejs.org/en/download  
2. **VS Code** → https://code.visualstudio.com/  
3. **Docker Desktop** → https://www.docker.com/products/docker-desktop/  
4. **Git** → https://git-scm.com/downloads  
5. **Postman (optional)** → https://www.postman.com/downloads/  
6. **PostgreSQL (optional)** → https://www.postgresql.org/download/

If you install Docker, you can skip PostgreSQL for now.

---

## 1) Node.js (The Engine)

Node.js is what runs our backend code.

AtopBank is built with:
- **Raw Node.js**
- no Express / Nest / Koa
- no magic frameworks

So Node is not optional — it’s the foundation.

###  Install
Download Node.js **LTS**:
https://nodejs.org/en/download

###  Verify
Open a terminal and run:

```bash
node -v
You should see something like:

v20.x.x
2) npm (Comes with Node)
npm is how we install a few small libraries:

pg (Postgres client)

argon2 (password hashing)

Verify
npm -v
If node -v works, npm usually works too.
```

## Docker (Your “Second Computer”)
Docker helps you run Postgres and the API in a clean, predictable way.

Think of Docker like a portable laptop inside your laptop.

We use Docker to avoid this problem: “It works on my machine… but not yours.”

## Install
Docker Desktop:
https://www.docker.com/products/docker-desktop/

### Verify
docker --version

If Docker is installed correctly, you’ll see a version number.



## PostgreSQL (The Database)
AtopBank stores real bank-like data:

- users

- KYC status

- wallets

- transactions

- notifications

- We use Postgres because it teaches real SQL and behaves like production systems.

> Option A - Use Docker (Recommended)
This is what we’ll do in the book.
No local Postgres setup stress.

- If Docker is installed, you can skip installing Postgres.

> Option B — Install Locally (Optional)
Download Postgres:
https://www.postgresql.org/download/

This is good if you want to learn Postgres outside Docker too.

## VS Code (Our Editor)
VS Code is the editor we’ll use in this book.

Why VS Code?

- fast

- free

- great TypeScript support

most backend teams use it

### Install
https://code.visualstudio.com/

## VS Code Extensions (Minimal + Useful)
You do not need 30 extensions.

Install only these:

#### REST Client (Highly Recommended)
Lets you run requests.http files inside VS Code.

https://marketplace.visualstudio.com/items?itemName=humao.rest-client

#### ESLint
Catches mistakes early.

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

#### Prettier
Keeps formatting clean and consistent.

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

That’s enough.

(You can add AI tools later if you want, but the book does not depend on them.)

## Terminal (Command Line)
You will use the terminal for:

- running the server

- running Docker

- running migrations

- checking logs

Any terminal is fine:

macOS Terminal

Windows Terminal

Linux Terminal

If you can type commands, you’re good.

##  Postman 

Postman is a visual tool for testing APIs.

We’ll use it to test:

signup/login

KYC flow

admin approval

wallet + transfers

### Install
https://www.postman.com/downloads/



## Git (Version Control)
Git helps you track changes like a time machine.

You don’t need to be an expert.
Just basics:

commit

branch

pull

### Install
https://git-scm.com/downloads

#### Verify
git --version

---
 

### Final Thought...
This book is not about tools.

Tools are just the pen.

What you’re really learning is:

1. how backend systems work

2. how data moves safely

3. how real backend engineers think

