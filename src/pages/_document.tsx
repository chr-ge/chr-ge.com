import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { config } from '@config/config'
import { env } from '@config/browser.env'

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {config.isProd && (
            <script
              defer
              src='https://eu.umami.is/script.js'
              data-website-id='4a4ce757-0376-42ea-b0e6-25a5286fcb44'
            />
          )}
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
          {config.isProd && (
            <script
              defer
              src='https://static.cloudflareinsights.com/beacon.min.js'
              data-cf-beacon={`{"token": "${env.NEXT_PUBLIC_CLOUDFLARE_TOKEN}"}`}
            />
          )}
        </body>
      </Html>
    )
  }
}

export default Document
