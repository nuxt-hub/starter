import { db, schema } from 'hub:db'

export default eventHandler(async (event) => {
  const { text } = await readBody(event)

  await db.insert(schema.messages).values({
    text,
    createdAt: Date.now(),
  })

  return {}
})
