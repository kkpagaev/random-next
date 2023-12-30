import * as dotenv from "dotenv"
dotenv.config()

import { migrate } from "drizzle-orm/node-postgres/migrator"
import { db, dbClient } from "./lib/db/drizzle"

async function run_migration() {
  await dbClient.connect()

  await migrate(db, { migrationsFolder: "./drizzle/migrations" })

  await dbClient.end()
}

run_migration()
