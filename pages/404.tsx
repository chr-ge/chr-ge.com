import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import MainLayout from 'layouts/MainLayout'
import { Header } from 'components'

const NotFound: NextPage = () => {
  const { t } = useTranslation('error')
  const gradient = useColorModeValue(
    'linear(to-t, primary.500, secondary.500)',
    'linear(to-t, #16222a, #3a6073)'
  )

  return (
    <MainLayout>
      <Box
        height='calc(100vh - 2rem)'
        bgGradient={gradient}
        borderRadius='lg'
        padding='4'
      >
        <Container h='100%' display='flex' flexDir='column' maxW='container.lg'>
          <Header />
          <VStack flex='1' justify='center'>
            <Heading as='h1' fontSize='6xl'>
              {t('error-404')}
            </Heading>
            <Heading as='h2' fontSize='4xl' color='white'>
              {t('page-not-found')}
            </Heading>
          </VStack>
        </Container>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'error'])),
  },
})

export default NotFound
