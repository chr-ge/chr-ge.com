/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    fallbackLng: 'en',
  },
  reloadOnPrerender: process.env.NODE_ENV !== 'production',
  localePath:
    typeof window === 'undefined'
      ? path.resolve('./public/locales')
      : '/locales',
}
