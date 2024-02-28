export default eventHandler(async (event) => {
  const { pathname } = event.context.params || {}

  return hubBlob().delete(pathname)
})
