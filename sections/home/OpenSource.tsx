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
      mb='4'
      py='4'
      px={['0', '4']}
    >
      <Container maxW='container.xl' mt='8'>
        <Heading
          as='h2'
          fontSize={['4xl', '5xl']}
          color={useColorModeValue('gray.700', 'gray.300')}
          textAlign='center'
          mb='12'
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
                pb='12'
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
