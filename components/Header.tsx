import { FC, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'
import { IoGrid } from 'react-icons/io5'
import useOutsideClick from 'hooks/useClickOutside'
import Menu from './Menu'

const Header: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { isOpen, onClose, onToggle } = useOutsideClick({ ref })
  const { t } = useTranslation('common')

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Flex
      bg={isDark ? 'gray.800' : 'white'}
      padding='2'
      borderRadius='lg'
      align='center'
      justify='space-between'
      boxShadow='lg'
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
          // {t('developer')}
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
          aria-label='toggle theme'
          onClick={toggleColorMode}
          title='toggle theme'
          variant='icon-button'
        />
        <IconButton
          icon={<IoGrid />}
          aria-label='menu'
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
