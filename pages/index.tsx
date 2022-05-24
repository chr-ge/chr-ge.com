import type { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import { MainLayout } from 'components/Layouts/MainLayout'
import { Hero, Contact, Skills, OpenSource } from 'sections/home'

const Projects = dynamic(() => import('sections/home/Projects'), {
  ssr: false,
})

const Home: NextPage = () => {
  useEffect(() => {
    console.info(
      `%c
     _____ _    _ _____         _____ ______ 
    / ____| |  | |  __ \\       / ____|  ____|
   | |    | |__| | |__) |_____| |  __| |__   
   | |    |  __  |  _  /______| | |_ |  __|  
   | |____| |  | | | \\ \\      | |__| | |____ 
    \\_____|_|  |_|_|  \\_\\      \\_____|______|

    Check out my portfolio's code on Github:
    https://github.com/chr-ge/chr-ge.com
    `,
      'color:yellow;font-weight:bold'
    )
  }, [])

  return (
    <MainLayout>
      <Hero />
      <Projects />
      <OpenSource />
      <Skills />
      <Contact />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
