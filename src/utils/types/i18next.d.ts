import 'i18next'

import bookmarks from '@public/locales/en/bookmarks.json'
import common from '@public/locales/en/common.json'
import error from '@public/locales/en/error.json'

interface I18nNamespaces {
  bookmarks: typeof bookmarks
  common: typeof common
  error: typeof error
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18nNamespaces
    returnNull: false
  }
}
