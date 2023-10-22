import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { MainLayout } from 'src/components/layouts/MainLayout'
import { config } from 'config/config'

const Project: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <MainLayout>
      <Center px='6' py='48'>
        <VStack spacing='12'>
          <Heading as='h1' variant='hero' size='hero'>
            {t('coming-soon')}
          </Heading>
          <NextLink href='/' passHref legacyBehavior>
            <Button as='a' variant='block'>
              {t('back-home')}
            </Button>
          </NextLink>
        </VStack>
      </Center>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale = config.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
})

export default Project
