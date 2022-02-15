/* eslint-disable @typescript-eslint/no-var-requires */
const nextSafe = require('next-safe')
const { i18n } = require('./next-i18next.config')

const isDev = process.env.NODE_ENV !== 'production'

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        ...nextSafe({
          isDev,
          referrerPolicy: 'strict-origin-when-cross-origin',
          contentSecurityPolicy: false,
        }),
      ],
    },
  ],
  rewrites: async () => [
    {
      source: '/bee.js',
      destination: 'https://cdn.splitbee.io/sb.js',
    },
    {
      source: '/_hive/:slug',
      destination: 'https://hive.splitbee.io/:slug',
    },
  ],
  i18n,
}
