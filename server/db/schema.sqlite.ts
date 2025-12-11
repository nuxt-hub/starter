import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const messages = sqliteTable('messages', {
  id: integer().primaryKey({ autoIncrement: true }),
  text: text().notNull(),
  createdAt: integer('created_at').notNull(),
})
