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
