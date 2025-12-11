// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-04-25',

  nitro: {
    experimental: {
      openAPI: true,
    },
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  hub: {
    db: 'sqlite',
    kv: true,
    blob: true,
    cache: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
