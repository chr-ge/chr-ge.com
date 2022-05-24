import { useTranslation } from 'next-i18next'
import {
  Button,
  Flex,
  Link,
  Icon,
  Text,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { FaNpm, FaGithub, FaChevronUp } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { useLanguage } from 'utils/hooks/useLanguage'
import { config } from 'configs/config'

export const Footer: React.FC = () => {
  const { t } = useTranslation('common')
  const { isEnglish, languageChange } = useLanguage()

  return (
    <Flex
      as='footer'
      p='8'
      mt='4'
      minH={['64', 'unset']}
      align='center'
      justify='space-between'
      direction={['column', 'row']}
      borderColor='black'
      borderTop='1px solid'
    >
      <Text
        flex='1'
        flexBasis={0}
        color='black'
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
          color='black'
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
            bg='gray'
            borderRadius='full'
            p='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={config.npm}
          display='flex'
          color='black'
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
            bg='gray'
            borderRadius='full'
            p='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={config.email_link}
          display='flex'
          _focus={{ boxShadow: 'secondary' }}
          color='black'
          title='Email'
        >
          <Icon
            as={HiOutlineMail}
            aria-label='Email'
            boxSize={12}
            bg='gray'
            borderRadius='full'
            p='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={config.linkedin}
          display='flex'
          _focus={{ boxShadow: 'secondary' }}
          color='black'
          title='LinkedIn'
          data-splitbee-event={config.splitbee.events.externalLink}
          data-splitbee-event-type='LinkedIn'
          isExternal
        >
          <Icon
            as={AiFillLinkedin}
            aria-label='LinkedIn'
            boxSize={12}
            bg='gray'
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
        <Button
          as='a'
          title={languageChange}
          href={isEnglish ? '/fr?ref=Footer' : '/?ref=Footer'}
          variant='icon'
          size='icon'
        >
          {isEnglish ? 'FR' : 'EN'}
        </Button>
        <IconButton
          aria-label={t('go-to-top')}
          icon={<FaChevronUp />}
          title='Go to top'
          variant='icon'
          size='icon'
          onClick={() => window.scrollTo(0, 0)}
          data-splitbee-event={config.splitbee.events.backToTop}
        />
      </HStack>
    </Flex>
  )
}
