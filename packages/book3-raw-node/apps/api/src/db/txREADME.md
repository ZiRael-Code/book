We are importing a TypeScript type, not real code.
PoolClient describes what shape the client object has. ie. I am telling TypeScript what kind of object the function expects.
"<T>" - This is a generic type. The function will return whatever type the callback returns.
"fn: () => Promise<T>" - This is a function passed into another function. It takes no argument and return a promise of "T"
"await client.query("begin")" - Calls the query method on client, sends begin to the database, 'await' pauses execution until the DB responds.
Try and catch is an error handling method.
"commit" and "rollback" is save all changes or undo everthing if any error happens. This follows the transaction principle

Lets go back to learning about transaction. Transactions follows the ACID principle which is:

A-  Atomicity- A transaction is treated as a single, indivisible unit. Either all its operations complete successfully(commit) or they all fail (roolback)

C-  Consistency- Database rules must always be respected. eg you cant create and order with non-existent userID.

I-  Isolation- Transactions dont interfere with each other.eg. If two users are buying the last item, only one should succeed. The other should fail or wait. 

D-  Durability- Once a transaction is committed, its changes are permanent and survive system failures.

ACID entures your database behaves correctly even when things go wrong.

