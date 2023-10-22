import { envsafe, str, url } from 'envsafe'
import { config } from './config'

export const env = envsafe({
  NEXT_PUBLIC_CLOUDFLARE_TOKEN: str({
    allowEmpty: !config.isProd,
    input: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN,
  }),
  NEXT_PUBLIC_FORMSPREE_URL: url({
    input: process.env.NEXT_PUBLIC_FORMSPREE_URL,
  }),
})
