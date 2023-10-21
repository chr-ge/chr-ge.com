import { envsafe, str } from 'envsafe'

export const serverEnv = envsafe({
  RAINDROP_TOKEN: str({
    input: process.env.RAINDROP_TOKEN,
  }),
})
