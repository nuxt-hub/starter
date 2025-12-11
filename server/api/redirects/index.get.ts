import { kv } from 'hub:kv'

export default eventHandler(async () => {
  return (await kv.get('redirects') || {})
})
