import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { Button, chakra, Flex, Heading, VStack } from '@chakra-ui/react'
import { ButtonArrow } from '../../meta'
import { config } from 'configs/config'

export const Hero: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Flex
      h='calc(100vh - 105px)'
      px={{ base: '4', md: '8' }}
      style={{ background: 'linear-gradient(90deg, #E9DEFA 0%, #FBFCDB 100%)' }}
    >
      <VStack align='flex-start' mt='44' maxW='container.md' spacing='12'>
        <Heading as='h1' variant='hero' size='hero'>
          {t('hero-title')}
        </Heading>
        <NextLink href='/#projects' passHref>
          <Button
            as='a'
            variant='secondary'
            sx={{
              '&:hover svg': {
                transform: 'scaleX(1.1)',
              },
            }}
            data-splitbee-event={config.splitbee.events.heroButton}
          >
            <chakra.span mr='4'>{t('hero-cta')}</chakra.span>
            <ButtonArrow
              transformOrigin='left'
              transition='transform 0.2s ease-in-out, fill 0.2s ease-in-out'
            />
          </Button>
        </NextLink>
      </VStack>
    </Flex>
  )
}
