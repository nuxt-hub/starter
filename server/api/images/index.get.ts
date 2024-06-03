export default eventHandler(async () => {
  const { blobs } = await hubBlob().list()

  return blobs
})
