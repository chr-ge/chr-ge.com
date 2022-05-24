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
  useColorModeValue,
} from '@chakra-ui/react'
import type { Bookmark as BookmarkProps } from 'types'
import { config } from 'configs/config'

export const Bookmark: FC<BookmarkProps> = ({ title, link, cover, tags }) => {
  const { t } = useTranslation('bookmarks')
  const cardBgColor = useColorModeValue('gray.50', 'gray.800')
  const tagColor = useColorModeValue('gray.600', 'gray.400')

  const domain = new URL(link).hostname.replace('www.', '')

  return (
    <LinkBox
      as='article'
      bgColor={cardBgColor}
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
            display='none'
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
          <LinkOverlay
            href={link}
            data-splitbee-event={config.splitbee.events.bookmark}
            data-splitbee-event-type={domain}
            isExternal
          >
            {title}
          </LinkOverlay>
        </Text>
        <HStack mt='auto'>
          {tags.map((tag) => (
            <Text
              key={tag}
              textTransform='uppercase'
              fontSize='xs'
              color={tagColor}
            >
              {tag}
            </Text>
          ))}
        </HStack>
      </Flex>
    </LinkBox>
  )
}
