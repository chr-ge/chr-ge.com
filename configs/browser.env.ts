import { envsafe, str, url } from 'envsafe'

export const env = envsafe({
  NEXT_PUBLIC_CLOUDFLARE_TOKEN: str({
    input: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN,
  }),
  NEXT_PUBLIC_FORMSPREE_URL: url({
    input: process.env.NEXT_PUBLIC_FORMSPREE_URL,
  }),
})
