import type {PoolClient} from "pg";

export async function withTransaction<T> (client: PoolClient,
    fn: () => Promise<T> 
) {
        await client.query("begin");
        try{
            const result = await fn();
            await client.query("commit");
            return result;
        }catch(e) {
            await client.query("rollback");
            throw e;
        }
    }
