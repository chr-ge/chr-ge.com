import { extendTheme } from '@chakra-ui/react'
import { Button, Heading, Input, Link, Textarea } from './components'

export const theme = extendTheme({
  colors: {
    black: '#16161D',
    primary: {
      100: '#AAEFF0',
      200: '#77E5E7',
      300: '#55DFE1',
      400: '#33D8DB',
      500: '#22c1c3',
      600: '#1EA5A7',
      700: '#19898B',
      800: '#146E6F',
      900: '#0C4546',
    },
    secondary: {
      100: '#FEE6B3',
      200: '#FED886',
      300: '#FDCE68',
      400: '#FDC449',
      500: '#fdbb2d',
      600: '#FBAC03',
      700: '#D19002',
      800: '#A77302',
    },
  },
  styles: {
    global: {
      html: {
        // scrollBehavior: 'smooth',
      },
      '::selection': {
        background: 'yellow.400',
      },
    },
  },
  fonts: {
    heading: 'Hanson, sans-serif',
    body: 'Manrope Variable, sans-serif',
  },
  shadows: {
    gray: '0 0 1px 2px rgba(75, 85, 99, .75)',
  },
  sizes: {
    header: {
      height: '6.5625rem',
    },
  },
  components: {
    Button,
    Heading,
    Input,
    Link,
    Textarea,
  },
})
