import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Textarea: ComponentSingleStyleConfig = {
  variants: {
    primary: {
      bg: 'white',
      borderRadius: 0,
      borderColor: 'black',
      border: '1px solid black',
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
