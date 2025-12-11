import { blob } from 'hub:blob'

export default eventHandler(async (event) => {
  return blob.handleUpload(event, {
    multiple: false,
    ensure: {
      maxSize: '8MB',
      types: ['image/png', 'image/jpeg'],
    },
  })
})
