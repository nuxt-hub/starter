export default eventHandler(async (event) => {
  const body = await readBody(event)

  // Used in server/routes/redirects.ts
  await hubKV().set('redirects', body)

  return body
})
