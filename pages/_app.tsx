import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from 'components/Fonts'
import siteConfig from 'configs/site-config'
import theme from 'styles/theme'
import "@fontsource/mulish/400.css"
import "@fontsource/mulish/700.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        {process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-domain='chr-ge.com'
            src='https://plausible.io/js/plausible.js'
          />
        )}
      </Head>
      <DefaultSeo {...siteConfig.seo} />
      <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
