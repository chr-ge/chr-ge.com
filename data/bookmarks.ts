import { config } from 'configs/config'

export interface Raindrop {
  _id: string
  title: string
  link: string
  cover: string
  tags: string[]
}

export const fetchBookmarks = async (page = 0): Promise<Raindrop[]> => {
  const req = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/0?search=%23portfolio&perpage=50&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${config.raindrop.token}`,
      },
    }
  )

  const data = await req.json()

  return data?.items.map((item: Raindrop) => ({
    _id: item._id,
    title: item.title,
    link: item.link,
    cover: item.cover,
    tags: item.tags.filter((tag) => tag !== 'portfolio'),
  }))
}
