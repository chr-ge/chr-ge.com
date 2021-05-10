import { FC } from 'react'
import { Box, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Technology from 'components/Project/Technology'
import type { SkillType } from 'types'

const Category: FC<SkillType> = ({ category, technologies }) => {
  return (
    <Box
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      borderWidth='thin'
      borderStyle='solid'
      padding='4'
      _hover={{ boxShadow: 'inner' }}
    >
      <Heading as='h4' color={useColorModeValue('gray.700', 'gray.500')}>
        {category}
      </Heading>
      <SimpleGrid marginTop='6' columns={3} spacing={6} width='70%'>
        {technologies.map((t) => (
          <Technology key={t.name} {...t} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Category
