export default eventHandler(async (event) => {
  return hubBlob().handleUpload(event, {
    multiple: false,
    maxSize: '8MB',
    types: ['image/png', 'image/jpeg']
  })
})
