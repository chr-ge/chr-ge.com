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
import type { Raindrop } from '@data/bookmarks'
import { config } from '@config/config'

export const Bookmark: React.FC<Raindrop> = ({ title, link, cover, tags }) => {
  const { t } = useTranslation('bookmarks')
  const domain = new URL(link).hostname.replace('www.', '')
  const bookmarkTags = tags.length ? tags : ['general']

  return (
    <LinkBox
      as='article'
      bgColor='gray.50'
      borderColor='black'
      border='1px solid'
      role='group'
    >
      <Flex h='full' flexDir='column' align='stretch'>
        <Box position='relative' borderColor='black' borderBottom='1px solid'>
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
            bg='blackAlpha.600'
            _groupHover={{ display: 'flex' }}
          >
            <Text fontWeight='bold' color='white' letterSpacing='wide'>
              {t('visit')}
            </Text>
          </Flex>
        </Box>
        <Text fontWeight='semibold' py='3' px='3'>
          <LinkOverlay
            href={link}
            data-splitbee-event={config.splitbee.events.bookmark}
            data-splitbee-event-type={domain}
            isExternal
          >
            {title}
          </LinkOverlay>
        </Text>
        <HStack mt='auto' px='3' pb='3'>
          {bookmarkTags.map((tag) => (
            <Text key={tag} casing='uppercase' fontSize='xs' color='gray.600'>
              {tag}
            </Text>
          ))}
        </HStack>
      </Flex>
    </LinkBox>
  )
}
