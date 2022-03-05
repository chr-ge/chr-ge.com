import { forwardRef } from 'react'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Button,
  Icon,
  Portal,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoHome } from 'react-icons/io5'
import { FaCode } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineMessage } from 'react-icons/ai'

interface MenuProps {
  onClose: () => void
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(({ onClose }, ref) => {
  const { t } = useTranslation('common')

  return (
    <Portal>
      <Box
        bgColor='rgba(0,0,0,0.4)'
        position='absolute'
        top={0}
        bottom={0}
        right={0}
        left={0}
      >
        <SimpleGrid
          ref={ref}
          position='fixed'
          right={0}
          bottom={0}
          margin='8'
          padding='4'
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow='xl'
          borderRadius='lg'
          columns={2}
          gap='2'
        >
          <NextLink href='/' passHref>
            <Button aria-label={t('home')} onClick={onClose} variant='menu'>
              <Icon as={IoHome} boxSize='6' mb='1' />
              {t('home')}
            </Button>
          </NextLink>
          <NextLink href='/#projects' passHref>
            <Button
              as='a'
              aria-label={t('projects')}
              onClick={onClose}
              variant='menu'
            >
              <Icon as={FaCode} boxSize='6' mb='1' />
              {t('projects')}
            </Button>
          </NextLink>
          <NextLink href='/bookmarks' passHref>
            <Button as='a' aria-label='Blog' onClick={onClose} variant='menu'>
              <Icon as={CgWebsite} boxSize='6' mb='1' />
              Bookmarks
            </Button>
          </NextLink>
          <NextLink href='/#contact-me' passHref>
            <Button
              as='a'
              aria-label={t('contact')}
              onClick={onClose}
              variant='menu'
            >
              <Icon as={AiOutlineMessage} boxSize='6' mb='1' />
              {t('contact')}
            </Button>
          </NextLink>
        </SimpleGrid>
      </Box>
    </Portal>
  )
})

Menu.displayName = 'Menu'

export default Menu
