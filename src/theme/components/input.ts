import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import type { ComponentMultiStyleConfig } from '@chakra-ui/react'
import type { PartsStyleFunction } from '@chakra-ui/theme-tools'

export const variantPrimary: PartsStyleFunction<typeof parts> = () => ({
  field: {
    bg: 'white',
    borderRadius: 0,
    borderColor: 'black',
    border: '1px solid black',
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
})

export const Input: ComponentMultiStyleConfig = {
  parts: ['field'],
  variants: {
    primary: variantPrimary,
  },
  defaultProps: {
    variant: 'primary',
  },
}
