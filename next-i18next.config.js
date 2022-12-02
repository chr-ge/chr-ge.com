module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  returnNull: false,
  reloadOnPrerender: process.env.NODE_ENV !== 'production',
  localePath:
    typeof window === 'undefined'
      ? // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('path').resolve('./public/locales')
      : '/locales',
}
