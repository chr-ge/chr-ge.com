import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useMemo, useRef, useState } from 'react'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react'
import { queryTypes, useQueryState } from 'next-usequerystate'
import { motion } from 'framer-motion'
import { MainLayout } from 'components/layouts/MainLayout'
import { config } from 'configs/config'
import { fetchBookmarks } from 'data/bookmarks'
import {
  Bookmark,
  type BookmarkProps,
  SlashDivider,
} from 'components/structure'

const MotionBox = motion(Box)
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
  const [isSticky, setIsSticky] = useState(false)
  const [activeTag, setActiveTag] = useQueryState(
    'tag',
    queryTypes.string.withDefault('all')
  )
  const tagsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(tagsRef.current?.getBoundingClientRect().top === 105)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bookmarks = useMemo(
    () =>
      bookmarksData.filter(({ tags }) =>
        activeTag !== 'all' ? tags.includes(activeTag) : true
      ),
    [activeTag]
  )

  const onTagClick = (tag: string): void => {
    setActiveTag(tag, { scroll: false, shallow: true })
  }

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
      <MotionBox
        ref={tagsRef}
        pos='sticky'
        top='105px'
        bg='white'
        px='8'
        zIndex='sticky'
        borderColor='black'
        borderBottom='1px solid'
        initial={{ paddingTop: '4rem', paddingBottom: '1.5rem' }}
        animate={
          isSticky
            ? {
                paddingTop: '1rem',
                paddingBottom: '1rem',
                background: [
                  'linear-gradient(90deg, #fad0c4 0%, #ffd1ff 100%)',
                  'linear-gradient(90deg, #fdcbf1 0%, #e6dee9 100%)',
                ],
              }
            : {
                paddingTop: '4rem',
                paddingBottom: '1.5rem',
                background: 'white',
              }
        }
        transition={{
          background: {
            repeat: isSticky ? Infinity : 0,
            repeatType: 'reverse',
            duration: isSticky ? 2 : 0.5,
          },
        }}
      >
        <HStack spacing='4' overflowX='auto'>
          {tags.map((tag) => (
            <Button
              key={tag}
              aria-label={tag}
              variant='block'
              onClick={() => onTagClick(tag)}
            >
              {tag}
            </Button>
          ))}
        </HStack>
      </MotionBox>
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
