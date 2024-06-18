import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Fonts } from '@components/meta'
import { config } from '@config/config'
import { env } from '@config/browser.env'
import { theme } from '../theme/theme'

import 'focus-visible/dist/focus-visible'
import '@fontsource-variable/manrope'

if (typeof window !== 'undefined') {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',
    person_profiles: 'identified_only',
    loaded: (posthog) => {
      if (config.isDev) posthog.debug() // debug mode in development
    },
  })
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

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
