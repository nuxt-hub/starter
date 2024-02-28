export default eventHandler(async (event) => {
  const form = await readFormData(event)
  const image = form.get('image') as File

  ensureBlob(image, { maxSize: '8MB', types: ['image/png', 'image/jpeg'] })

  return hubBlob().put(image.name, image)
})
