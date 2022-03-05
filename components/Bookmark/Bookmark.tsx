import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import {
  AspectRatio,
  Image,
  HStack,
  Skeleton,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  Flex,
} from '@chakra-ui/react'
import type { Bookmark as BookmarkProps } from 'types'

export const Bookmark: FC<BookmarkProps> = ({ title, link, cover, tags }) => {
  const { t } = useTranslation('bookmarks')

  return (
    <LinkBox
      as='article'
      bg='gray.50'
      p='2'
      shadow='sm'
      rounded='md'
      role='group'
    >
      <Flex height='100%' direction='column' align='stretch'>
        <Box position='relative'>
          <AspectRatio w='full' ratio={16 / 9}>
            <Image
              src={cover}
              alt={title}
              fallback={<Skeleton />}
              rounded='sm'
            />
          </AspectRatio>
          <Flex
            d='none'
            position='absolute'
            align='center'
            justify='center'
            left='0'
            right='0'
            top='0'
            bottom='0'
            bg='rgba(0,0,0,0.4)'
            rounded='sm'
            _groupHover={{ d: 'flex' }}
          >
            <Text fontWeight='bold' color='white' letterSpacing='wide'>
              {t('visit')}
            </Text>
          </Flex>
        </Box>
        <Text fontWeight='semibold' py='3'>
          <LinkOverlay href={link} isExternal>
            {title}
          </LinkOverlay>
        </Text>
        <HStack mt='auto'>
          {tags.map((tag) => (
            <Text
              key={tag}
              textTransform='uppercase'
              fontSize='xs'
              color='gray.600'
            >
              {tag}
            </Text>
          ))}
        </HStack>
      </Flex>
    </LinkBox>
  )
}
