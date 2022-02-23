import 'react-i18next'

import common from 'public/locales/en/common.json'
import error from 'public/locales/en/error.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      common: typeof common
      error: typeof error
    }
  }
}
