import {drizzle} from 'drizzle-orm/neon-http';
import {integer, pgTable, varchar} from "drizzle-orm/pg-core";

const db = drizzle(process.env.DATABASE_URL ?? '');

export const columnsTable = pgTable('columns', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar(),
})
