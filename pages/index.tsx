import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Button, Heading } from '@chakra-ui/react'
import MainLayout from 'layouts/MainLayout'

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <MainLayout>
      <Heading
        as="h1"
        width={['95%', '80%', '75%']}
        fontSize={['4xl', '5xl', '6xl']}
        fontWeight='bold'
        marginTop='10'
      >
        {t('headline')}
      </Heading>
      <Button
        aria-label={t('headline-button')}
        marginTop='8'
        type='button'
        _hover={{ transform: 'scale(1.03) translateX(6px)' }}
      >
        {t('headline-button')}
      </Button>
    </MainLayout>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
