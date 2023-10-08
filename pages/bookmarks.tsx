import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { parseAsString, useQueryState } from 'next-usequerystate'
import { motion } from 'framer-motion'
import { MainLayout } from 'components/layouts/MainLayout'
import { type Raindrop, fetchBookmarks } from 'data/bookmarks'
import { Bookmark, SlashDivider, TagsBar } from 'components/structure'
import { config } from 'configs/config'

const MotionFlex = motion(Flex)

interface BookmarksProps {
  bookmarks: Raindrop[]
  tags: string[]
}

const Bookmarks: NextPage<BookmarksProps> = ({
  bookmarks: bookmarksData,
  tags,
}) => {
  const { t } = useTranslation('bookmarks')
  const [activeTag, setActiveTag] = useQueryState(
    'tag',
    parseAsString.withDefault('all')
  )

  const bookmarks = useMemo(
    () =>
      bookmarksData.filter(
        ({ tags }) => activeTag === 'all' || tags.includes(activeTag)
      ),
    [activeTag]
  )

  return (
    <MainLayout>
      <NextSeo title={t('bookmarks')} description={t('bookmarks-subtitle')} />
      <MotionFlex
        h='96'
        flexDir='column'
        justify='center'
        py={['0', '4']}
        px={{ base: '4', md: '8' }}
        rowGap='6'
        animate={{
          background: [
            'linear-gradient(90deg, #fad0c4 0%, #ffd1ff 100%)',
            'linear-gradient(90deg, #fdcbf1 0%, #e6dee9 100%)',
          ],
        }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
      >
        <Heading as='h1' variant='hero' size='hero'>
          {t('bookmarks')}
        </Heading>
        <Text>{t('bookmarks-subtitle')}</Text>
      </MotionFlex>
      <SlashDivider />
      <TagsBar
        tags={tags}
        activeTag={activeTag}
        onTagClick={(tag) =>
          setActiveTag(tag, { scroll: false, shallow: true })
        }
      />
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
