import { useRouter } from 'next/router'

const useLanguage = () => {
  const router = useRouter()

  const locale = router.locale
  const isEnglish = locale === 'en'
  const language = isEnglish ? 'English' : 'Français'
  const languageChange = isEnglish ? 'Français' : 'English'

  return { locale, isEnglish, language, languageChange }
}

export default useLanguage
