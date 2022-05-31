import { useTranslation } from 'next-i18next'
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { SkillGroup } from './SkillGroup'
import { data } from './data'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
}

const MotionSimpleGrid = motion(SimpleGrid)

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
      <MotionSimpleGrid
        columns={[1, null, 2, 3]}
        spacing='12'
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {data.map((skill) => (
          <SkillGroup key={skill.id} {...skill} />
        ))}
      </MotionSimpleGrid>
    </VStack>
  )
}
