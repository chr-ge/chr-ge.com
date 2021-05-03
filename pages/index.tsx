import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'layouts/MainLayout'
import { Heading, Projects } from 'sections/home'

const Home = () => {
  return (
    <MainLayout>
      <Heading />
      <Projects />
    </MainLayout>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
