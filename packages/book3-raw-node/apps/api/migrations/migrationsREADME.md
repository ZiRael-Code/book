Database Migrations (AtopBank)
First things first.   what is a migration?

A migration is simply a recorded change to the database.

That’s it.

Think of migrations a s instructions for building the database from scratch.

Why do we even need migrations?

Because databases don’t stay the same forever.

Today, AtopBank only needs:

users

login sessions etc

Tomorrow, it might need different things:

If we just “edit the database whenever”, things go wrong very quickly:

different developers have different schemas

production looks different from local and nobody remembers what changed or when

Migrations solve this by making every change explicit, ordered, and repeatable.


Imagine the database starts empty.

Migrations teach it things step by step.

- First lesson: “this is what a user looks like”

- Second lesson: “this is how we store sessions”

- Third lesson (later): “this is how accounts work”

Each migration is one lesson.

The database never forgets what it has already learned.

How does the database remember?

We create a small internal table called:

schema_migrations


This table stores the names of migration files that have already been applied.

So when the server starts:

1. It looks at all migration files

2. It checks which ones are already recorded

3. It runs only the missing ones

This is why migrations are safe to run every time the app starts.

Why are migrations numbered?

You’ll notice files like:

0001_init.sql
0002_auth_indexes.sql


The numbers are not decoration. They enforce order.

Databases must learn things in the correct sequence.

You can’t:

create indexes for a table that doesn’t exist

reference users before users are created

The numbering guarantees that:

0001 always runs before 0002

the database is built consistently everywhere

Once a migration is committed, never rename or reorder it.

What does 0001_init.sql do?

This is the foundation.

It creates the minimum tables required for authentication to work.

1. schema_migrations

This table tracks applied migrations.

Without it:

migrations would run repeatedly

tables would be recreated

data would be lost

This table is the database’s memory.

2. users

This table represents a real AtopBank customer.

It stores:

full name

email (unique)

password hash (never the raw password)

onboarding status

KYC status

creation time

Nothing more, nothing less.

Every other feature in the system eventually connects back to users.

3. sessions

This table represents logged-in devices.

Each row is one session:

- a browser

- a phone

- a laptop

Instead of storing refresh tokens directly, we store:

a hash of the refresh token

expiration time

whether it has been revoked

device and IP information

This allows us to:

log out from one device

show “logged-in devices”

invalidate stolen tokens

build proper security later

This table is the backbone of secure authentication.

What does 0002_auth_indexes.sql do?

This migration does not change behavior.

It only makes things faster.

As the number of users and sessions grows, we will often ask questions like:

“find all sessions for this user”

“is this session expired?”

“has this session been revoked?”

Indexes make those lookups fast.

We keep indexes in a separate migration because:

it keeps the main schema readable

performance tweaks should be isolated

it’s easier to understand what changed and why

Why not put everything in one big SQL file?

Because that doesn’t scale.

When something breaks, you want to be able to say:

“The problem started after migration 0007.”

Small, focused migrations make:

debugging easier

reviews clearer

teaching simpler

One migration = one idea.

Important rules (don’t skip these)

Never edit an old migration after it’s applied.

Never delete migrations that have been committed.

Always create a new migration for new changes.

Migrations should be deterministic (no random data).

If a mistake happens, you fix it with another migration, not by rewriting history.

How this fits the “Raw Node” philosophy

Frameworks hide database changes behind tools.

Here, you see:

every table

every column

every index

every decision

If you understand migrations properly, you will understand any ORM or framework later — because they all rely on the same idea underneath.

What comes next?

Future migrations will introduce:

KYC documents

bank accounts

ledger entries

cards

admin approvals

audit logs

Each feature will arrive as a new migration, clearly documented.

Final takeaway

Tables are the present

Migrations are the past

schema_migrations is memory

If you lose migrations, you lose history.

That’s why real systems always use them.

