import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  variants: {
    icon: {
      bg: 'transparent',
      color: 'inherit',
    },
    secondary: {
      bg: 'transparent',
      textTransform: 'uppercase',
      color: 'black',
      fontSize: 'lg',
      fontWeight: 'bold',
      p: 0,
    },
    block: {
      bg: 'white',
      borderRadius: 0,
      borderColor: 'black',
      border: '1px solid',
      px: '8',
      _hover: {
        bg: 'gray.100',
      },
    },
  },
  sizes: {
    icon: {
      p: 0,
      h: 10,
      minW: 10,
      fontSize: 'lg',
    },
  },
}
