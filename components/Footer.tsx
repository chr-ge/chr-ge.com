import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Flex,
  Link,
  Icon,
  Text,
  HStack,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaNpm, FaGithub, FaChevronUp } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { siteConfig } from 'configs/site-config'
import useLanguage from 'hooks/useLanguage'

const Footer: FC = () => {
  const { t } = useTranslation('common')
  const { isEnglish, languageChange } = useLanguage()

  const iconBg = useColorModeValue('primary.500', 'primary.700')
  const textColor = useColorModeValue('gray.50', 'gray.300')

  return (
    <Flex
      as='footer'
      bgColor={useColorModeValue('primary.700', 'primary.900')}
      padding='8'
      marginTop='4'
      borderRadius='lg'
      minH={['64', 'unset']}
      align='center'
      justify='space-between'
      direction={['column', 'row']}
    >
      <Text
        flex={1}
        flexBasis={0}
        color={textColor}
        fontWeight='semibold'
        align={['center', 'left']}
      >
        {siteConfig.copyright}. {t('proudly_made_in_mtl')}
      </Text>
      <HStack
        flex={1}
        flexBasis={0}
        justify='center'
        spacing='3'
        paddingTop={['10', '0']}
      >
        <Link
          href={siteConfig.github}
          display='flex'
          color={textColor}
          _focus={{ boxShadow: 'secondary' }}
          title='Github'
          data-splitbee-event={siteConfig.splitbee.events.externalLink}
          data-splitbee-event-type='Github'
          isExternal
        >
          <Icon
            as={FaGithub}
            aria-label='Github'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            padding='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={siteConfig.npm}
          display='flex'
          color={textColor}
          _focus={{ boxShadow: 'secondary' }}
          title='NPM'
          data-splitbee-event={siteConfig.splitbee.events.externalLink}
          data-splitbee-event-type='NPM'
          isExternal
        >
          <Icon
            as={FaNpm}
            aria-label='NPM'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            padding='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={siteConfig.email_link}
          display='flex'
          _focus={{ boxShadow: 'secondary' }}
          color={textColor}
          title='Email'
        >
          <Icon
            as={HiOutlineMail}
            aria-label='Email'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            padding='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={siteConfig.linkedin}
          display='flex'
          _focus={{ boxShadow: 'secondary' }}
          color={textColor}
          title='LinkedIn'
          data-splitbee-event={siteConfig.splitbee.events.externalLink}
          data-splitbee-event-type='LinkedIn'
          isExternal
        >
          <Icon
            as={AiFillLinkedin}
            aria-label='LinkedIn'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            padding='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
      </HStack>
      <HStack
        flex={1}
        flexBasis={0}
        spacing='3'
        justify='flex-end'
        align='center'
        paddingTop={['10', '0']}
      >
        <Link
          href={isEnglish ? '/fr?ref=Footer' : '/?ref=Footer'}
          display='flex'
          color={textColor}
          title={languageChange}
          _hover={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'secondary' }}
        >
          <Center
            boxSize={10}
            bg={iconBg}
            borderRadius='full'
            padding='1'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          >
            <Text fontSize='xl' fontWeight='bold'>
              {isEnglish ? 'FR' : 'EN'}
            </Text>
          </Center>
        </Link>
        <Link
          href='/#top'
          title='Go to top'
          color={textColor}
          display='flex'
          _focus={{ boxShadow: 'secondary' }}
        >
          <Icon
            as={FaChevronUp}
            aria-label={t('go-to-top')}
            boxSize={10}
            bg={iconBg}
            borderRadius='full'
            padding='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
      </HStack>
    </Flex>
  )
}

export default Footer
