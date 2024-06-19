import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { config } from '@config/config'
import { env } from '@config/browser.env'

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
          {config.isDev && (
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
