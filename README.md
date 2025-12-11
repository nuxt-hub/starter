# NuxtHub Starter Template

This starter lets you get started with [NuxtHub](https://hub.nuxt.com) in seconds.

- [Documentation](https://hub.nuxt.com)

## Features

- Image upload with [NuxtHub Blob](https://hub.nuxt.com/docs/features/blob) from `hub:blob`
- Save chat messages with [NuxtHub Database](https://hub.nuxt.com/docs/features/database) from `hub:db` (Drizzle ORM)
- Save server redirects with [NuxtHub KV](https://hub.nuxt.com/docs/features/kv) from `hub:kv`
- Cache an API response with [NuxtHub Cache](https://hub.nuxt.com/docs/features/cache)

## Setup

Make sure to install the dependencies with [pnpm](https://pnpm.io).

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

## Deploy

### Vercel

On the Vercel dashboard -> Storage, create a Turso SQLite database, Redis database, and Vercel Blob store

```bash
npm run deploy-vercel
```

Link the newly created resources to your project and re-deploy.

You can also connect using your git repository to leverage Vercel's CI/CD pipeline.

### Cloudflare

```bash
npm run deploy-cloudflare
```

Wrangler will create the necessary resources on your Cloudflare account.

You can also connect using your git repository to leverage Cloudflare's CI/CD pipeline.
