import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from 'components/Fonts'
import { useSplitbee } from 'utils/hooks/useSplitbee'
import { config } from 'configs/config'
import theme from 'styles/theme'
import 'focus-visible/dist/focus-visible'
import 'keen-slider/keen-slider.min.css'
import '@fontsource/mulish/400.css'
import '@fontsource/mulish/700.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useSplitbee()

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <DefaultSeo {...config.seo} />
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
