import { parseURL } from 'ufo'

export default eventHandler(async (event) => {
  // Skip during prerendering
  if (import.meta.prerender) return

  const { pathname } = parseURL(event.path)
  const redirects = await hubKV().get<{ [key: string]: string }>('redirects')

  if (redirects?.[pathname]) {
    return sendRedirect(event, redirects[pathname])
  }
})
