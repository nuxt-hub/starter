<script setup lang="ts">
const { data: redirects, refresh } = await useFetch('/api/redirects', {
  transform: (data: { [key: string]: string }) => {
    // Transform to text for the textarea
    return Object.entries(data).map(([from, to]) => `${from} ${to}`).join('\n')
  }
})

async function updateRedirects () {
  const body = Object.fromEntries(
    redirects.value!.split('\n').map(line => line.split(' '))
  )
  await $fetch('/api/redirects', {
    method: 'PUT',
    body
  })
  await refresh()
}
</script>

<template>
  <div>
    <h3>Server redirects</h3>
    <form @submit.prevent="updateRedirects">
      <p><textarea v-model="redirects" rows="6" placeholder="/from /to (one redirect per line)" style="width: 300px;" /></p>
      <button type="submit">
        Save redirects
      </button>
    </form>
  </div>
</template>
