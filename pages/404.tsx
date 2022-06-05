import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { MainLayout } from 'components/layouts/MainLayout'
import { config } from 'configs/config'

const NotFound: NextPage = () => {
  const { t } = useTranslation('error')

  return (
    <MainLayout title={t('page-not-found')}>
      <Box minH='calc(100vh - 105px)' px='8' pt='36'>
        <VStack align='center' spacing='4'>
          <Heading as='h1' variant='hero' size='hero'>
            {t('error-404')}
          </Heading>
          <Heading as='h2' fontSize='4xl'>
            {t('page-not-found')}
          </Heading>
        </VStack>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale = config.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'error'])),
  },
})

export default NotFound
