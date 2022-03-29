import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Button,
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
import { useLanguage } from 'utils/hooks/useLanguage'
import { config } from 'configs/config'

const Footer: FC = () => {
  const { t } = useTranslation('common')
  const { isEnglish, languageChange } = useLanguage()

  const iconBg = useColorModeValue('primary.500', 'primary.700')
  const textColor = useColorModeValue('gray.50', 'gray.300')

  return (
    <Flex
      as='footer'
      bgColor={useColorModeValue('primary.700', 'primary.900')}
      p='8'
      mt='4'
      borderRadius='lg'
      minH={['64', 'unset']}
      align='center'
      justify='space-between'
      direction={['column', 'row']}
    >
      <Text
        flex='1'
        flexBasis={0}
        color={textColor}
        fontWeight='semibold'
        align={['center', 'left']}
      >
        {config.copyright}. {t('proudly-made-in-mtl')}
      </Text>
      <HStack
        flex='1'
        flexBasis={0}
        justify='center'
        spacing='3'
        pt={['10', '0']}
      >
        <Link
          href={config.github}
          display='flex'
          color={textColor}
          _focus={{ boxShadow: 'secondary' }}
          title='Github'
          data-splitbee-event={config.splitbee.events.externalLink}
          data-splitbee-event-type='Github'
          isExternal
        >
          <Icon
            as={FaGithub}
            aria-label='Github'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            p='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={config.npm}
          display='flex'
          color={textColor}
          _focus={{ boxShadow: 'secondary' }}
          title='NPM'
          data-splitbee-event={config.splitbee.events.externalLink}
          data-splitbee-event-type='NPM'
          isExternal
        >
          <Icon
            as={FaNpm}
            aria-label='NPM'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            p='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={config.email_link}
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
            p='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={config.linkedin}
          display='flex'
          _focus={{ boxShadow: 'secondary' }}
          color={textColor}
          title='LinkedIn'
          data-splitbee-event={config.splitbee.events.externalLink}
          data-splitbee-event-type='LinkedIn'
          isExternal
        >
          <Icon
            as={AiFillLinkedin}
            aria-label='LinkedIn'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            p='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
      </HStack>
      <HStack
        flex='1'
        flexBasis={0}
        spacing='3'
        justify='flex-end'
        align='center'
        pt={['10', '0']}
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
            p='1'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          >
            <Text fontSize='xl' fontWeight='bold'>
              {isEnglish ? 'FR' : 'EN'}
            </Text>
          </Center>
        </Link>
        <Button
          aria-label='Go to top'
          title='Go to top'
          variant='unstyled'
          color={textColor}
          onClick={() => window.scrollTo(0, 0)}
          _focus={{ boxShadow: 'secondary' }}
          data-splitbee-event={config.splitbee.events.backToTop}
        >
          <Icon
            as={FaChevronUp}
            aria-label={t('go-to-top')}
            boxSize={10}
            bg={iconBg}
            borderRadius='full'
            p='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Button>
      </HStack>
    </Flex>
  )
}

export default Footer
