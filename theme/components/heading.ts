import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentSingleStyleConfig = {
  variants: {
    hero: {
      textTransform: 'uppercase',
      fontSize: '4rem',
      color: '#383434',
      fontWeight: 'bold',
    },
    section: {
      textTransform: 'uppercase',
      fontSize: '5xl',
      color: '#383434',
      fontWeight: 'bold',
    },
  },
}
