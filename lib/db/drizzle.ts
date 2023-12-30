import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres"
import { Client } from "pg"
import * as schema from "./schema"

export const dbClient = new Client({
  connectionString: process.env.DATABASE_URL ?? "postgres://user:user@localhost:6060/user"
})

export const db = drizzle(dbClient, { schema })

export type Drizzle = NodePgDatabase<typeof schema>
