import { useRouter } from 'next/router'

export const useLanguage = () => {
  const router = useRouter()

  const locale = (router.locale ?? 'en') as 'en' | 'fr'
  const isEnglish = locale === 'en'
  const language = isEnglish ? 'English' : 'Français'
  const languageChange = isEnglish ? 'Français' : 'English'

  return { locale, isEnglish, language, languageChange }
}
