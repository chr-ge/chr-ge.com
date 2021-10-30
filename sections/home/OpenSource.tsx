import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Container,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { InView } from 'react-intersection-observer'
import { useKeenSlider } from 'keen-slider/react'
import { Contribution } from 'components/Contribution'
import contributions from 'data/contributions'
import MotionBox from 'components/MotionBox'

const OpenSource: FC = () => {
  const { t } = useTranslation('common')
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1,
    mode: 'snap',
    spacing: 24,
    dragSpeed: 0.5,
    rubberband: false,
    breakpoints: {
      '(min-width: 48em)': {
        slidesPerView: 2.5,
      },
    },
  })

  return (
    <Box
      as='section'
      bgGradient={useColorModeValue(
        'linear(to-r, #43c6ac, #f8ffae)',
        'linear(to-r, #4b6cb7, #182848)'
      )}
      borderRadius='lg'
      marginBottom='4'
      padding={['0', '4']}
    >
      <Container maxW='container.xl'>
        <Heading
          as='h2'
          fontSize={['4xl', '5xl']}
          marginBottom='12'
          marginTop='8'
          color={useColorModeValue('gray.700', 'gray.300')}
          paddingTop={['4', '0']}
          textAlign='center'
        >
          {t('open-source')}
        </Heading>
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <MotionBox
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Box ref={ref}>
                <Flex
                  ref={sliderRef}
                  className='keen-slider'
                  paddingBottom='12'
                >
                  {contributions.map((contribution) => (
                    <Contribution
                      key={contribution.repository}
                      {...contribution}
                    />
                  ))}
                </Flex>
              </Box>
            </MotionBox>
          )}
        </InView>
      </Container>
    </Box>
  )
}

export default OpenSource
