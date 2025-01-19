/* eslint-disable @typescript-eslint/no-var-requires */
const nextSafe = require('next-safe')
const { i18n } = require('./next-i18next.config')

const isDev = process.env.NODE_ENV !== 'production'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withBundleAnalyzer({
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
  redirects: async () => [
    {
      source: '/github',
      destination: 'https://github.com/chr-ge',
      permanent: true,
    },
  ],
  rewrites: async () => [
    {
      source: '/ingest/static/:path*',
      destination: 'https://us-assets.i.posthog.com/static/:path*',
    },
    {
      source: '/ingest/:path*',
      destination: 'https://us.i.posthog.com/:path*',
    },
    {
      source: '/ingest/decide',
      destination: 'https://us.i.posthog.com/decide',
    },
  ],
  skipTrailingSlashRedirect: true,
  i18n,
})
