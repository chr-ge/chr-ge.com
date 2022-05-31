import type { BookmarkProps } from 'components/Bookmark'
import { config } from 'configs/config'

export const fetchBookmarks = async (page = 0): Promise<BookmarkProps[]> => {
  const req = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/0?search=%23portfolio&perpage=50&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${config.raindrop.token}`,
      },
    }
  )

  const data = await req.json()

  return data?.items.map((item: BookmarkProps) => ({
    _id: item._id,
    title: item.title,
    link: item.link,
    cover: item.cover,
    tags: item.tags.filter((tag) => tag !== 'portfolio'),
  }))
}
