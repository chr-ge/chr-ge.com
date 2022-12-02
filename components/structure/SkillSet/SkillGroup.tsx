import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import type { TFuncKey } from 'i18next'
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import type { Skill } from 'utils/types'
import { SkillBox } from './SkillBox'

const group: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export interface SkillGroupProps {
  id: string
  category: string
  skills: Skill[]
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, skills }) => {
  const { t } = useTranslation('common')
  const [borderColor, setBorderColor] = useState('black')

  return (
    <motion.div variants={group}>
      <VStack
        align='flex-start'
        p='6'
        borderColor={borderColor}
        borderWidth='1px'
        borderStyle='solid'
        spacing='6'
        transition='border-color 0.1s ease-in-out'
      >
        <Heading as='h3' variant='skillCategory'>
          {t(category as TFuncKey<'common'>)}
        </Heading>
        <SimpleGrid columns={3} spacing='5'>
          {skills.map((skill) => (
            <SkillBox
              key={skill.name}
              setBorderColor={setBorderColor}
              {...skill}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </motion.div>
  )
}
