import { NodePgDatabase, drizzle as dz } from "drizzle-orm/node-postgres"
import { Client } from "pg"
import * as schema from "./schema"

export const dbClient = new Client({
  connectionString: process.env.DATABASE_URL ?? "postgres://user:user@localhost:6060/user"
})

dbClient.connect()

export const drizzleDb = dz(dbClient, { schema })

export type Drizzle = NodePgDatabase<typeof schema>
