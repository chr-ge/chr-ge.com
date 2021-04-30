import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Flex, Heading } from '@chakra-ui/layout'
import MainLayout from 'layouts/MainLayout'

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default function Home() {
  return (
    <MainLayout>
      <Heading mt='72' textAlign='center' fontSize="6xl">
        Coming Soon.
      </Heading>
    </MainLayout>
  )
}
