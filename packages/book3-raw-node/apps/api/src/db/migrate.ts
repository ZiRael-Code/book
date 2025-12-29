import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { pool } from "./client.js";

export async function runMigrations(migrationsDir: string) {

    const client =  await pool.connect();
  try {
    await client.query(`
      create table if not exists schema_migrations (
        filename text primary key,
        applied_at timestamptz not null default now()
      );
    `);

    const files = (await readdir(migrationsDir)).filter(f => f.endsWith(".sql")).sort();

    for (const filename of files) {
      const applied = await client.query("select 1 from schema_migrations where filename=$1", [filename]);
      if (applied.rowCount) continue;

      const sql = await readFile(join(migrationsDir, filename), "utf8");
      await client.query("begin");
      try {
        await client.query(sql);
        await client.query("insert into schema_migrations(filename) values ($1)", [filename]);
        await client.query("commit");
        console.log(`[migrate] applied ${filename}`);
      } catch (e) {
        await client.query("rollback");
        throw e;
      }
    }
  } finally {
    client.release();
  }
}