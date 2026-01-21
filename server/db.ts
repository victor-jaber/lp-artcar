import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL;

// Allow the server to run without a database for purely static deployments.
export const databaseEnabled = Boolean(connectionString);

let pool: pg.Pool | null = null;
let db: NodePgDatabase<typeof schema> | null = null;

if (databaseEnabled) {
  pool = new Pool({ connectionString });
  db = drizzle(pool, { schema });
} else {
  // eslint-disable-next-line no-console
  console.warn("DATABASE_URL not set; running without a database. Inquiries will not be persisted.");
}

export { pool, db };
