export default eventHandler(async (event) => {
  const { messageID, text }: { messageID: number, text: string } = await readBody(event)
  const db = hubDatabase()

  await db
    .prepare('UPDATE messages SET text = ?1 WHERE id = ?2')
    .bind(text, messageID)
    .run()

  return {}
})
