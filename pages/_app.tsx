import type { AppProps } from 'next/app'
import Head from "next/head"
import { DefaultSeo } from "next-seo"
import siteConfig from 'configs/site-config'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
