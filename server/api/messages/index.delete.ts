export default eventHandler(async (event) => {
  const { messageID } = await readBody(event)
  const db = hubDatabase()

  await db
    .prepare('DELETE FROM messages WHERE id = ?1')
    .bind(messageID)
    .run()

  return {}
})
