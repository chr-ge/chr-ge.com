import { useEffect } from 'react'
import splitbee from '@splitbee/web'

export const useSplitbee = () => {
  useEffect(() => {
    splitbee.init({
      scriptUrl: '/bee.js',
      apiUrl: '/_hive',
    })
  }, [])
}
