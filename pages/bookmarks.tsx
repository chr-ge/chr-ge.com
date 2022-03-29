import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import { useQueryState } from 'next-usequerystate'
import MainLayout from 'layouts/MainLayout'
import { Header } from 'components'
import { config } from 'configs/config'
import { fetchBookmarks } from 'data/bookmarks'
import { Bookmark } from 'components/Bookmark'
import type { Bookmark as BookmarkType } from 'types'

interface BookmarksProps {
  bookmarks: BookmarkType[]
  tags: string[]
}

const Bookmarks: NextPage<BookmarksProps> = ({
  bookmarks: bookmarksData,
  tags = [],
}) => {
  const { t } = useTranslation('bookmarks')
  const [tag, setTag] = useQueryState('tag')

  const bookmarks = useMemo(
    () => bookmarksData.filter(({ tags }) => (tag ? tags.includes(tag) : true)),
    [tag]
  )

  return (
    <MainLayout d='flex' flexDirection='column'>
      <NextSeo title={t('bookmarks')} />
      <Box
        bgGradient={useColorModeValue(
          'linear(to-r, #C0DEFF, #AFEBF3)',
          'linear(to-r, #2213AC, #363795)'
        )}
        borderRadius='lg'
        marginBottom='4'
        padding={['0', '4']}
      >
        <Container maxW='container.lg'>
          <Header />
          <Heading as='h1' my='12' fontSize='5xl'>
            {t('bookmarks')}.
          </Heading>
          <HStack mb='2'>
            {['all', ...tags].map((tag) => (
              <Button
                key={tag}
                aria-label={tag}
                size='sm'
                onClick={() => setTag(tag === 'all' ? null : tag)}
                colorScheme='pink'
              >
                {tag}
              </Button>
            ))}
          </HStack>
        </Container>
      </Box>
      <Box
        flex={1}
        bgGradient={useColorModeValue(
          'linear(to-r, #D6F3F7,#D0E7F5)',
          'linear(to-r, #312C90, #392CBA)'
        )}
        borderRadius='lg'
        paddingX={['0', '4']}
        paddingY={['0', '12']}
      >
        <Container maxW='container.lg'>
          <SimpleGrid columns={[1, 2, 4]} spacing='4'>
            {bookmarks.map((bookmark) => (
              <Bookmark key={bookmark._id} {...bookmark} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<BookmarksProps> = async ({
  locale = 'en',
}) => {
  const bookmarks = await fetchBookmarks()
  const tags = Array.from(new Set(bookmarks.flatMap(({ tags }) => tags)))

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
