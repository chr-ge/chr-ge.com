import 'react-i18next'

import bookmarks from 'public/locales/en/bookmarks.json'
import common from 'public/locales/en/common.json'
import error from 'public/locales/en/error.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      bookmarks: typeof bookmarks
      common: typeof common
      error: typeof error
    }
  }
}
