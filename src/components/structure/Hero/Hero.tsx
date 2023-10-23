import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { Button, chakra, Flex, Heading, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { config } from '@config/config'
import { ButtonArrow } from '../../meta'

const MotionFlex = motion(Flex)
const MotionHeading = motion(Heading)
const MotionButton = motion(Button)

export const Hero: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <MotionFlex
      h='calc(100vh - var(--chakra-sizes-header-height))'
      px={{ base: '4', md: '8' }}
      align='center'
      animate={{
        background: [
          'linear-gradient(80deg, #ddcbf8 0%, #eaed9e 100%)',
          'linear-gradient(120deg, #ddfffc 0%, #C79DEE 100%)',
        ],
      }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.75 }}
    >
      <VStack align='flex-start' pb='32' maxW='container.md' spacing='12'>
        <MotionHeading
          as='h1'
          variant='hero'
          size='hero'
          wordBreak='break-word'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {t('hero-title')}
        </MotionHeading>
        <NextLink href='/#projects' passHref legacyBehavior>
          <MotionButton
            as='a'
            variant='secondary'
            sx={{
              '&:hover svg': {
                transform: 'scaleX(1.1)',
              },
            }}
            data-splitbee-event={config.splitbee.events.heroButton}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <chakra.span mr='4'>{t('hero-cta')}</chakra.span>
            <ButtonArrow
              transformOrigin='left'
              transition='transform 0.2s ease-in-out, fill 0.2s ease-in-out'
            />
          </MotionButton>
        </NextLink>
      </VStack>
    </MotionFlex>
  )
}
