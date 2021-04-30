import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Box, Heading } from '@chakra-ui/layout'
import MainLayout from 'layouts/MainLayout'

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <MainLayout>
      <Heading fontSize='6xl' fontWeight='bold' marginTop='10' width="75%">
        {t('headline')}
      </Heading>
    </MainLayout>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
