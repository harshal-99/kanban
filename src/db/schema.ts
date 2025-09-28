import { drizzle } from "drizzle-orm/neon-http";
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

if (!process.env.DATABASE_URL)
  throw new Error(
    "DATABASE_URL is not defined. Please define it in your .env file.",
  );

const db = drizzle(process.env.DATABASE_URL);

export const columnsTable = pgTable("columns", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull().unique(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
