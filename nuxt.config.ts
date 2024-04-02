// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxthub/core'],
  devtools: { enabled: true },
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHUb
      openAPI: true
    }
  }
})
