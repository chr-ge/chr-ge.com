import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Heading } from '@chakra-ui/layout'
import MainLayout from 'layouts/MainLayout'

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default function Home() {
  return (
    <MainLayout>
      <Heading>Hello and Welcome</Heading>
    </MainLayout>
  )
}
