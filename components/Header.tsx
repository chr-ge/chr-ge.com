import { FC, useRef } from 'react'
import {
  Box,
  Text,
  Icon,
  IconButton,
  Flex,
  useColorMode,
} from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'
import { IoGrid } from 'react-icons/io5'
import useOutsideClick from 'hooks/useClickOutside'
import Menu from './Menu'

const Header: FC = () => {
  const ref = useRef<HTMLButtonElement>(null)
  const { isOpen, onToggle } = useOutsideClick({ ref })
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Flex
      bg={isDark ? 'gray.800' : 'white'}
      padding='2'
      borderRadius='lg'
      align='center'
      justify='space-between'
      boxShadow="lg"
    >
      <Text as='h4' fontWeight='bold' marginLeft='2' fontSize='lg'>
        CHR-GE
      </Text>
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
          ref={ref}
          icon={<IoGrid />}
          aria-label='menu'
          onClick={onToggle}
          marginLeft='2'
          variant='icon-button'
        />
      </Box>
      {isOpen && <Menu />}
    </Flex>
  )
}

export default Header
