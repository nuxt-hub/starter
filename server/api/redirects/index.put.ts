import { kv } from 'hub:kv'

export default eventHandler(async (event) => {
  const body = await readBody(event)

  // Used in server/middleware/redirects.ts
  await kv.set('redirects', body)

  return body
})
