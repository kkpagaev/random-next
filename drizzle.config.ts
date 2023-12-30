import type { Config } from "drizzle-kit"
import * as dotenv from "dotenv"
dotenv.config()

export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString:
      process.env.DB_URL || "postgres://user:user@localhost:6060/user"
  }
} satisfies Config
