import { FC } from 'react'
import { Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { InView } from 'react-intersection-observer'
import Technology from 'components/Project/Technology'
import MotionBox from 'components/MotionBox'
import type { SkillType } from 'types'

interface CategoryProps extends SkillType {
  index: number
}

const Category: FC<CategoryProps> = ({ index, category, technologies }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const headingColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <InView threshold={0.25} triggerOnce>
      {({ ref, inView }) => (
        <MotionBox
          borderColor={borderColor}
          borderWidth='thin'
          borderStyle='solid'
          padding='6'
          _hover={{ boxShadow: 'inner' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25, delay: index / 4 }}
        >
          <Heading ref={ref} as='h4' color={headingColor}>
            {category}
          </Heading>
          <SimpleGrid marginTop='6' columns={3} spacing={5} width='72.5%'>
            {technologies.map((t) => (
              <Technology key={t.name} {...t} />
            ))}
          </SimpleGrid>
        </MotionBox>
      )}
    </InView>
  )
}

export default Category
