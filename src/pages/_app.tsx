import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Fonts } from '@components/meta'
import { config } from '@config/config'
import { useSetupPostHog } from '@utils/hooks/use-setup-posthog'
import { theme } from '../theme/theme'

import 'focus-visible/dist/focus-visible'
import '@fontsource-variable/manrope'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useSetupPostHog()

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
      <PostHogProvider client={posthog}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Component {...pageProps} />
        </ChakraProvider>
      </PostHogProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
