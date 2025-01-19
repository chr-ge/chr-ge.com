import { useEffect, useRef } from 'react'
import { Router } from 'next/router'
import posthog from 'posthog-js'
import { env } from '@config/browser.env'
import { config } from '@config/config'

export const useSetupPostHog = (): void => {
  const oldUrlRef = useRef('')

  useEffect(() => {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      // Enable debug mode in development
      loaded: (posthog) => {
        if (config.isDev) posthog.debug()
      },
    })

    const handleRouteChange = () => posthog?.capture('$pageview')

    const handleRouteChangeStart = () =>
      posthog?.capture('$pageleave', {
        $current_url: oldUrlRef.current,
      })

    Router.events.on('routeChangeComplete', handleRouteChange)
    Router.events.on('routeChangeStart', handleRouteChangeStart)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
      Router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [])
}
