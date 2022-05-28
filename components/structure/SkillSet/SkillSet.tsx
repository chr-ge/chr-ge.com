import { useTranslation } from 'next-i18next'
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { SkillGroup } from './SkillGroup'
import { data } from './data'

export const SkillSet: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      as='section'
      align='stretch'
      py='20'
      px={{ base: '4', md: '8' }}
      borderColor='black'
      borderTop='1px solid'
      spacing='16'
    >
      <Heading as='h2' variant='section' size='2xl'>
        {t('skills-heading')}
      </Heading>
      <SimpleGrid spacing='12' columns={[1, null, 2, 3]}>
        {data.map((skill) => (
          <SkillGroup key={skill.id} {...skill} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
