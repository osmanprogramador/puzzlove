import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const rooms = sqliteTable('rooms', {
  code: text('code').primaryKey(), revision: integer('revision').notNull().default(0),
  data: text('data').notNull(), expires: integer('expires').notNull(),
});
