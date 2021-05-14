import { useTranslation } from 'next-i18next'
import {
  chakra,
  Box,
  Button,
  Container,
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import MotionBox from 'components/MotionBox'
import { Header } from 'components'

const HeadingSection = () => {
  const { t } = useTranslation('common')
  const gradient = useColorModeValue(
    'linear(to-t, primary.500, secondary.500)',
    'linear(to-t, #16222a, #3a6073)'
  )

  return (
    <Box
      height='calc(100vh - 2rem)'
      bgGradient={gradient}
      borderRadius='lg'
      padding='4'
      marginBottom='4'
    >
      <Container maxW='container.lg'>
        <Header />
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <Heading
            as='h1'
            width={['95%', '80%', '75%']}
            fontSize={['4xl', '5xl', '6xl']}
            fontWeight='bold'
            marginTop='44'
          >
            {t('headline-1')}
            <chakra.span cursor='url(/img/mouse_cursor.png), text'>
              {t('mouse')}
            </chakra.span>
            {t('headline-2')}
            <chakra.span cursor='url(/img/keyboard_cursor.png), text'>
              {t('keyboard')}
            </chakra.span>
          </Heading>
        </MotionBox>
        <Button
          as={Link}
          aria-label={t('headline-button')}
          href='#projects'
          marginTop='8'
          type='button'
          _hover={{
            transform: 'scale(1.03) translateX(6px)',
            textDecoration: 'none',
          }}
        >
          {t('headline-button')}
        </Button>
      </Container>
    </Box>
  )
}

export default HeadingSection
