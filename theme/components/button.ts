import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  variants: {
    icon: {
      bg: 'transparent',
      color: 'inherit',
      borderRadius: 0,
      transition: 'border 0.1s ease-in',
      _hover: {
        borderColor: 'black',
        border: '1px solid',
      },
    },
    secondary: {
      bg: 'transparent',
      textTransform: 'uppercase',
      color: 'black',
      fontSize: 'lg',
      fontWeight: 'bold',
      p: 0,
      _hover: {
        color: 'gray.700',
      },
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
    navItem: {
      borderRadius: 0,
      bg: 'white',
      justifyContent: 'flex-end',
      minW: '44',
      h: '20',
      borderColor: 'black',
      border: '1px solid',
      px: '8',
      _hover: {
        backgroundImage:
          'repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(0, 0, 0, 1) 24px, rgba(0, 0, 0, 1) 25px)',
      },
      _activeLink: {
        fontStyle: 'italic',
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
