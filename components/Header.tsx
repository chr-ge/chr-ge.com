import { FC, useRef } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'
import { IoGrid } from 'react-icons/io5'
import useOutsideClick from 'hooks/useClickOutside'
import useLanguage from 'hooks/useLanguage'
import Menu from './Menu'

const Header: FC = () => {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const { isOpen, onClose, onToggle } = useOutsideClick({ ref })
  const { t } = useTranslation('common')
  const { isEnglish, languageChange } = useLanguage()

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Flex
      as='header'
      id='top'
      bg={isDark ? 'gray.800' : 'white'}
      padding='2'
      borderRadius='lg'
      align='center'
      justify='space-between'
      boxShadow='lg'
      marginTop='6'
      sx={{ scrollMarginTop: '2rem' }}
    >
      <Flex align='start' direction={['row', 'column', 'row']}>
        <Text
          as='h4'
          fontWeight='bold'
          marginLeft='2'
          fontSize='lg'
          whiteSpace='pre'
        >
          CHR-GE
        </Text>
        <Text
          as='h4'
          marginLeft='2'
          fontSize='lg'
          whiteSpace='pre'
          display={['none', 'block']}
        >
          {t('developer')}
        </Text>
      </Flex>
      <Box>
        <IconButton
          icon={
            <Icon
              as={VscColorMode}
              transform={isDark ? 'rotate(180deg)' : undefined}
              transition='transform 1.5s ease'
            />
          }
          aria-label={`${isDark ? 'Light' : 'Dark'} Mode`}
          title={`${isDark ? 'Light' : 'Dark'} Mode`}
          onClick={toggleColorMode}
          variant='icon-button'
        />
        <Button
          padding='0'
          aria-label={languageChange}
          title={languageChange}
          onClick={() =>
            router.push('/?ref=Header', '/?ref=Header', {
              locale: isEnglish ? 'fr' : 'en',
            })
          }
          marginLeft='2'
          variant='icon-button'
        >
          {isEnglish ? 'FR' : 'EN'}
        </Button>
        <IconButton
          icon={<IoGrid />}
          aria-label='Menu'
          title='Menu'
          onClick={onToggle}
          marginLeft='2'
          variant='icon-button'
        />
      </Box>
      {isOpen && <Menu ref={ref} onClose={onClose} />}
    </Flex>
  )
}

export default Header
