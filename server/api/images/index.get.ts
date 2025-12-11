import { blob } from 'hub:blob'

export default eventHandler(async () => {
  const { blobs } = await blob.list()

  return blobs
})
