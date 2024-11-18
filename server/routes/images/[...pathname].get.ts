export default eventHandler(async (event) => {
  const { pathname } = event.context.params || {}

  setHeader(event, 'Content-Security-Policy', 'default-src \'none\';')
  return hubBlob().serve(event, pathname)
})
