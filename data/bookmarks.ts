import type { Bookmark } from 'types'
import { siteConfig } from 'configs/site-config'

export const fetchBookmarks = async (page = 0): Promise<Bookmark[]> => {
  const req = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/0?search=%23portfolio&perpage=50&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${siteConfig.raindrop.token}`,
      },
    }
  )

  const data = await req.json()

  return data?.items.map((item: Bookmark) => ({
    _id: item._id,
    title: item.title,
    link: item.link,
    cover: item.cover,
    tags: item.tags.filter((tag) => tag !== 'portfolio'),
  }))
}
