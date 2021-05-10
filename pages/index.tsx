import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import MainLayout from 'layouts/MainLayout'
import { Heading, Contact, Skills } from 'sections/home'

const Projects = dynamic(() => import('sections/home/Projects'), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Heading />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
