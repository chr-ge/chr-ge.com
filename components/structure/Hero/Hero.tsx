import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { Button, chakra, Flex, Heading, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ButtonArrow } from '../../meta'
import { config } from 'configs/config'

const MotionFlex = motion(Flex)

export const Hero: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <MotionFlex
      h='calc(100vh - 105px)'
      px={{ base: '4', md: '8' }}
      animate={{
        background: [
          'linear-gradient(90deg, #E9DEFA 0%, #FBFCDB 100%)',
          'linear-gradient(90deg, #e4defa 0%, #fcf0db 100%)',
        ],
      }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
    >
      <VStack align='flex-start' mt='44' maxW='container.md' spacing='12'>
        <Heading as='h1' variant='hero' size='hero' wordBreak='break-word'>
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
    </MotionFlex>
  )
}
