import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Container,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { InView } from 'react-intersection-observer'
import { Contribution } from 'components/Contribution'
import contributions from 'data/contributions'
import MotionBox from 'components/MotionBox'

export const OpenSource: FC = () => {
  const { t } = useTranslation('common')

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
              <Stack
                ref={ref}
                direction={['column', 'column', 'row']}
                spacing={[12, 12, 20]}
                paddingBottom='12'
                align='center'
                justify='center'
              >
                {contributions.map((contribution) => (
                  <Contribution
                    key={contribution.repository}
                    {...contribution}
                  />
                ))}
              </Stack>
            </MotionBox>
          )}
        </InView>
      </Container>
    </Box>
  )
}
