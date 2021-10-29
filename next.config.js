const { i18n } = require('./next-i18next.config')

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
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

module.exports = nextConfig
