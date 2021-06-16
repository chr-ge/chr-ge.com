import { forwardRef } from 'react'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const { t } = useTranslation('common')

  const onClick = (route: string) => {
    router.push(route)
    onClose()
  }

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
          <Button
            aria-label={t('home')}
            onClick={() => onClick('/')}
            variant='menu'
            type='button'
          >
            <Icon as={IoHome} boxSize='6' mb='1' />
            {t('home')}
          </Button>
          <Button
            aria-label={t('projects')}
            onClick={() => onClick('/#projects')}
            variant='menu'
            type='button'
          >
            <Icon as={FaCode} boxSize='6' mb='1' />
            {t('projects')}
          </Button>
          <Button
            aria-label='Blog'
            onClick={() => onClick('/')}
            variant='menu'
            type='button'
            isDisabled
          >
            <Icon as={CgWebsite} boxSize='6' mb='1' />
            Blog
          </Button>
          <Button
            aria-label={t('contact')}
            onClick={() => onClick('/#contact-me')}
            variant='menu'
            type='button'
          >
            <Icon as={AiOutlineMessage} boxSize='6' mb='1' />
            {t('contact')}
          </Button>
        </SimpleGrid>
      </Box>
    </Portal>
  )
})

Menu.displayName = 'Menu'

export default Menu
