import * as dotenv from "dotenv"
import { drizzle as dz } from "drizzle-orm/node-postgres"
import { Client } from "pg"
dotenv.config()

import { migrate } from "drizzle-orm/node-postgres/migrator"
import * as schema from "./lib/db/schema"

async function run_migration() {
  const dbClient = new Client({
    connectionString: process.env.DATABASE_URL ?? "postgres://user:user@localhost:6060/user"
  })
  await dbClient.connect()

  const db = dz(dbClient, { schema })

  await migrate(db, { migrationsFolder: "./drizzle/migrations" })

  await dbClient.end()
}

run_migration()
