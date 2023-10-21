import { envsafe, str, url } from 'envsafe'

export const env = envsafe({
  NEXT_PUBLIC_CLOUDFLARE_TOKEN: str({
    input: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN,
  }),
  FORMSPREE_URL: url({
    input: process.env.FORMSPREE_URL,
  }),
  RAINDROP_TOKEN: str({
    input: process.env.RAINDROP_TOKEN,
  }),
})
