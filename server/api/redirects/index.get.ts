export default eventHandler(async () => {
  return (await hubKV().get('redirects') || {})
})
