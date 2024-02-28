export default eventHandler(async (event) => {
  const { text } = await readBody(event)
  const db = hubDatabase()

  await db
    .prepare('INSERT INTO messages (text, created_at) VALUES (?1, ?2)')
    .bind(text, Date.now())
    .run()

  return {}
})
