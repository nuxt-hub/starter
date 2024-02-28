<script setup lang="ts">
const { data: images, refresh } = await useFetch('/api/images')

async function uploadImage (e: any) {
  await $fetch('/api/images/upload', {
    method: 'POST',
    body: new FormData(e.target as HTMLFormElement)
  }).catch((err) => alert('Failed to upload image:\n'+ err.data?.message))
  e.target.reset()
  await refresh()
}

async function deleteImage (pathname: string) {
  await $fetch(`/api/images/${pathname}`, { method: 'DELETE' })
  await refresh()
}
</script>

<template>
  <div>
    <h3>Images</h3>
    <form @submit.prevent="uploadImage">
      <label>Upload an image: <input type="file" name="image"></label>
      <button type="submit">
        Upload
      </button>
    </form>
    <p>
      <img
        v-for="image of images"
        :key="image.pathname"
        width="200"
        :src="`/images/${image.pathname}`"
        :alt="image.pathname"
        @dblclick="deleteImage(image.pathname)"
      >
    </p>
    <p v-if="images?.length">
      <i>Tip: delete an image by double-clicking on it.</i>
    </p>
  </div>
</template>
