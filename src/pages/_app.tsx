import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import { Fonts } from '@components/meta'
import { useSplitbee } from '@utils/hooks/use-splitbee'
import { config } from '@config/config'
import { theme } from '../theme/theme'

import 'focus-visible/dist/focus-visible'
import '@fontsource-variable/manrope'

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
      <Analytics />
      <DefaultSeo {...config.seo} />
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
