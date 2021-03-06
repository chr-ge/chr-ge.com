import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import { Fonts } from 'components/meta'
import { useSplitbee } from 'utils/hooks/use-splitbee'
import { config } from 'configs/config'
import { theme } from 'theme/theme'

import 'focus-visible/dist/focus-visible'
import '@fontsource/mulish/400.css'
import '@fontsource/mulish/700.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useSplitbee()

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link
          rel='preload'
          href='/fonts/hanson-bold.ttf'
          as='font'
          type='font/ttf'
          crossOrigin=''
        />
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
