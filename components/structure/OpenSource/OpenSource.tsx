import { useTranslation } from 'next-i18next'
import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { contributions } from 'data/contributions'
import { Contribution } from './Contribution'

export const OpenSource: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      as='section'
      align='stretch'
      pt='16'
      pb='20'
      borderColor='black'
      borderTop='1px solid'
      spacing='16'
    >
      <Box
        px={{ base: '4', md: '8' }}
        pb='3'
        pt='16'
        style={{
          background: 'linear-gradient(90deg, #93A5CF 0%, #E4EFE9 100%)',
        }}
      >
        <Heading as='h2' variant='section' color='white'>
          {t('open-source')}
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        px={{ base: '4', md: '8' }}
        spacing='16'
      >
        {contributions.map((contribution) => (
          <Contribution key={contribution.repository} {...contribution} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
