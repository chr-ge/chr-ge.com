import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentSingleStyleConfig = {
  variants: {
    hero: {
      color: '#383434',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    section: {
      color: '#383434',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    skillCategory: {
      fontSize: '2rem',
      fontFamily: 'body',
      color: '#4A5568',
    },
  },
  sizes: {
    hero: {
      fontSize: { base: '4xl', md: '4rem' },
      lineHeight: 1,
    },
  },
}
