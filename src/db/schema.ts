import {drizzle} from 'drizzle-orm/vercel-postgres';
import {integer, pgTable, varchar} from "drizzle-orm/pg-core";

const db = drizzle();

export const columnsTable = pgTable('columns', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar(),
})
