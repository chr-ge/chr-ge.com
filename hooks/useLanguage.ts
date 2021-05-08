import { useRouter } from 'next/router'

const useLanguage = () => {
  const router = useRouter()

  const language = router.locale
  const isEnglish = language === 'en'

  return { language, isEnglish }
}

export default useLanguage
