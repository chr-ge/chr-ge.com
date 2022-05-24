import { useTranslation } from 'next-i18next'
import { Heading, VStack, Wrap } from '@chakra-ui/react'
import { SkillGroup } from './SkillGroup'
import { data } from './data'

export const SkillSet: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      as='section'
      align='stretch'
      py='20'
      px='8'
      borderColor='black'
      borderTop='1px solid'
      spacing='16'
    >
      <Heading as='h2' variant='section'>
        {t('skills-heading')}
      </Heading>
      <Wrap spacing='8'>
        {data.map((skill) => (
          <SkillGroup key={skill.id} {...skill} />
        ))}
      </Wrap>
    </VStack>
  )
}
