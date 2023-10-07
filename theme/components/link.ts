import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Link: ComponentSingleStyleConfig = {
  variants: {
    projectLink: {
      textDecoration: 'underline dashed',
      textDecorationThickness: '2px',
      textUnderlineOffset: '1px',
      _hover: {
        textDecoration: 'underline',
      },
    },
    social: {
      textTransform: 'uppercase',
      fontWeight: 'semibold',
      color: 'black',
    },
    moreProjects: {
      color: 'black',
      fontWeight: 'medium',
      transition: 'color 0.1s ease',
      _groupHover: {
        color: '#7e91bc',
        textDecoration: 'underline',
        textDecorationColor: '#7e91bc',
        textUnderlineOffset: '2px',
      },
    },
  },
}
