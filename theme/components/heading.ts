import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentSingleStyleConfig = {
  variants: {
    hero: {
      // fontSize: { base: '4xl', md: '4rem' },
      fontSize: '4rem',
      color: '#383434',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    section: {
      fontSize: '5xl',
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
}
