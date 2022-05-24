import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentSingleStyleConfig = {
  baseStyle: {
    textTransform: 'uppercase',
  },
  variants: {
    hero: {
      // fontSize: { base: '4xl', md: '4rem' },
      fontSize: '4rem',
      color: '#383434',
      fontWeight: 'bold',
    },
    section: {
      fontSize: '5xl',
      color: '#383434',
      fontWeight: 'bold',
    },
  },
}
