const { i18n } = require('./next-i18next.config')

// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  i18n,
}

module.exports = nextConfig
