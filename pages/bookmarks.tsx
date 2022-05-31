import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { queryTypes, useQueryState } from 'next-usequerystate'
import { motion } from 'framer-motion'
import { MainLayout } from 'components/layouts/MainLayout'
import { fetchBookmarks } from 'data/bookmarks'
import {
  Bookmark,
  type BookmarkProps,
  SlashDivider,
  TagsBar,
} from 'components/structure'
import { config } from 'configs/config'

const MotionFlex = motion(Flex)

interface BookmarksProps {
  bookmarks: BookmarkProps[]
  tags: string[]
}

const Bookmarks: NextPage<BookmarksProps> = ({
  bookmarks: bookmarksData,
  tags,
}) => {
  const { t } = useTranslation('bookmarks')
  const [activeTag, setActiveTag] = useQueryState(
    'tag',
    queryTypes.string.withDefault('all')
  )

  const bookmarks = useMemo(
    () =>
      bookmarksData.filter(({ tags }) =>
        activeTag !== 'all' ? tags.includes(activeTag) : true
      ),
    [activeTag]
  )

  const onTagClick = useCallback((tag: string): void => {
    setActiveTag(tag, { scroll: false, shallow: true })
  }, [])

  return (
    <MainLayout>
      <NextSeo title={t('bookmarks')} />
      <MotionFlex
        h='22rem'
        align='center'
        py={['0', '4']}
        px={{ base: '4', md: '8' }}
        animate={{
          background: [
            'linear-gradient(90deg, #fad0c4 0%, #ffd1ff 100%)',
            'linear-gradient(90deg, #fdcbf1 0%, #e6dee9 100%)',
          ],
        }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
      >
        <Heading as='h1' variant='hero' size='hero'>
          {t('bookmarks')}.
        </Heading>
      </MotionFlex>
      <SlashDivider />
      <TagsBar tags={tags} onTagClick={onTagClick} />
      <Box px={{ base: '4', md: '8' }} py={['8', '16']}>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={{ base: '6', md: '8' }}>
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark._id} {...bookmark} />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<BookmarksProps> = async ({
  locale = config.defaultLocale,
}) => {
  const bookmarks = await fetchBookmarks()
  const tags = [
    'all',
    ...Array.from(new Set(bookmarks.flatMap(({ tags }) => tags))),
  ]

  return {
    props: {
      bookmarks,
      tags,
      ...(await serverSideTranslations(locale, ['common', 'bookmarks'])),
    },
    revalidate: config.revalidateDelay,
  }
}

export default Bookmarks
