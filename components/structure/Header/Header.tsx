import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import { Menu } from './Menu'

export const Header: React.FC = () => {
  const { t } = useTranslation('common')
  const { asPath, locale = 'en', query, pathname, push } = useRouter()
  const { isOpen, onToggle, onClose } = useDisclosure()

  const toggleLocale = (): void => {
    push({ pathname, query }, asPath, {
      locale: locale === 'en' ? 'fr' : 'en',
    })
  }

  return (
    <Box as='header' pos='sticky' zIndex='banner' top='0' left='0' right='0'>
      <Flex
        pos='relative'
        zIndex='banner'
        align='center'
        justify='space-between'
        bg='white'
        pt='12'
        pb='4'
        px={{ base: '4', md: '8' }}
        borderColor='black'
        borderBottom='1px solid'
      >
        <NextLink href='/' passHref>
          <Text
            as='a'
            fontWeight='bold'
            fontSize={{ base: 'lg', md: '2xl' }}
            casing='uppercase'
          >
            George Christeas
          </Text>
        </NextLink>
        <HStack spacing='2'>
          <Button variant='icon' size='icon' onClick={toggleLocale}>
            {locale === 'en' ? 'FR' : 'EN'}
          </Button>
          <IconButton
            aria-label={t(isOpen ? 'close-menu' : 'open-menu')}
            icon={isOpen ? <VscChromeClose /> : <HiOutlineMenuAlt4 />}
            variant='icon'
            size='icon'
            onClick={onToggle}
          />
        </HStack>
      </Flex>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
