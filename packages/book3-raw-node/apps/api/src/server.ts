import "dotenv/config";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { handle } from "./router.js";
import { config } from "./lib/config.js";
import { runMigrations } from "./db/migrate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => void handle(req, res));

async function main() {
  const migrationsDir = path.join(__dirname, "../migrations");
  await runMigrations(migrationsDir);

  server.listen(config.PORT, () => {
    console.log(`API listening on http://localhost:${config.PORT}`);
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
