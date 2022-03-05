import { extendTheme, ThemeComponentProps, ChakraTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
        scrollBehavior: 'smooth',
      },
    },
  },
  fonts: {
    heading: 'Gilroy, sans-serif',
    body: 'Mulish, sans-serif',
  },
  shadows: {
    secondary:
      '0 0 1px 2px rgba(253, 196, 73, .75), 0 1px 1px rgba(0, 0, 0, .15)',
    gray: '0 0 1px 2px rgba(75, 85, 99, .75)',
  },
  components: {
    Button: {
      variants: {
        'icon-button': ({ colorMode }: ThemeComponentProps<ChakraTheme>) => ({
          rounded: 'md',
          bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
          _hover: {
            bg: colorMode === 'dark' ? 'gray.600' : 'gray.200',
            boxShadow: 'sm',
          },
          _focus: {
            boxShadow: 'secondary',
          },
        }),
        menu: {
          display: 'flex',
          flexDirection: 'column',
          height: '28',
          width: '28',
          bg: 'secondary.400',
          color: 'secondary.800',
          paddingY: '10',
          boxShadow: 'md',
          _hover: {
            bg: 'secondary.300',
          },
          _focus: {
            boxShadow: 'gray',
          },
        },
      },
    },
  },
})

export default theme
