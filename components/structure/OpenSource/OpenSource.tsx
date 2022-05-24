import { useTranslation } from 'next-i18next'
import { Heading, VStack } from '@chakra-ui/react'

export const OpenSource: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      as='section'
      align='stretch'
      py='20'
      px='8'
      borderColor='black'
      borderTop='1px solid'
    >
      <Heading as='h2' variant='section'>
        {t('open-source')}
      </Heading>
    </VStack>
  )
}
