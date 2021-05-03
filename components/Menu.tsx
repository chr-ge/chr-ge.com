import { FC } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Box, Button, Icon, Portal, SimpleGrid } from '@chakra-ui/react'
import { IoHome } from 'react-icons/io5'
import { FaCode } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineMessage } from 'react-icons/ai'

const Menu: FC = () => {
  const router = useRouter()
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
          position='fixed'
          right={0}
          bottom={0}
          margin='8'
          padding='4'
          bg='white'
          boxShadow='xl'
          borderRadius='lg'
          columns={2}
          gap='2'
        >
          <Button aria-label={t('home')} variant='menu' type='button'>
            <Icon as={IoHome} boxSize='6' mb='1' />
            {t('home')}
          </Button>
          <Button aria-label={t('projects')} variant='menu' type='button'>
            <Icon as={FaCode} boxSize='6' mb='1' />
            {t('projects')}
          </Button>
          <Button aria-label='Blog' variant='menu' type='button'>
            <Icon as={CgWebsite} boxSize='6' mb='1' />
            Blog
          </Button>
          <Button aria-label={t('contact')} variant='menu' type='button'>
            <Icon as={AiOutlineMessage} boxSize='6' mb='1' />
            {t('contact')}
          </Button>
        </SimpleGrid>
      </Box>
    </Portal>
  )
}

export default Menu
