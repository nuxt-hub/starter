<script setup lang="ts">
const { data: messages, refresh } = await useFetch('/api/messages')
const newMessage = ref('')
// const updateMessage = ref('')

async function sendMessage() {
  if (!newMessage.value.trim()) return
  await $fetch('/api/messages', {
    method: 'POST',
    body: {
      text: newMessage.value,
    },
  })
  newMessage.value = ''
  await refresh()
}

async function deleteMessage(messageID: number | undefined) {
  await $fetch('/api/messages', {
    method: 'DELETE',
    body: {
      messageID,
    },
  })
  await refresh()
}

async function updateMessage(
  messageID: number | undefined,
  text: string | undefined,
) {
  await $fetch('/api/messages', {
    method: 'PUT',
    body: {
      messageID,
      text,
    },
  })
  await refresh()
}
</script>

<template>
  <div>
    <h3>Messages</h3>

    <form @submit.prevent="sendMessage">
      <input
        v-model="newMessage"
        placeholder="Type a message"
      >
      <button type="submit">
        Send
      </button>
    </form>

    <p
      v-for="message of messages"
      :key="message.id"
    >
      <input
        v-model="message.text"
        type="text"
      >
      <button @click="updateMessage(message.id, message.text)">
        update
      </button><button>
        <i @click="deleteMessage(message.id)">delete</i>
      </button>
      -
      {{ new Date(message.created_at || 0).toLocaleString("en") }}
    </p>
    <p v-if="!messages?.length">
      No messages yet
    </p>
  </div>
</template>
