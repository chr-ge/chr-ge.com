import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import siteConfig from 'configs/site-config'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
          {siteConfig.isProd && (
            <script
              defer
              src='https://static.cloudflareinsights.com/beacon.min.js'
              data-cf-beacon={`{"token": "${siteConfig.cloudflareToken}"}`}
            />
          )}
        </body>
      </Html>
    )
  }
}

export default Document
