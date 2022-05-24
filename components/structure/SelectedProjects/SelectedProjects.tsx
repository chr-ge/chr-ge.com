import { Box, Heading, VStack } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

export const SelectedProjects: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      id='selected-projects'
      as='section'
      align='stretch'
      py='20'
      px='8'
      spacing='16'
      sx={{ scrollMarginTop: '105px' }}
    >
      <Heading as='h2' variant='section'>
        {t('selected-projects')}
      </Heading>
      <VStack align='stretch' spacing='12'>
        {[1, 2, 3].map((n) => (
          <Box key={n} bg='gray' h='64' />
        ))}
      </VStack>
    </VStack>
  )
}
