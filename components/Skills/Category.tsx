import { FC } from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Technology from 'components/Project/Technology'
import type { SkillType } from 'types'

const Category: FC<SkillType> = ({ category, technologies }) => {
  return (
    <Box
      borderColor='gray.200'
      borderWidth='thin'
      borderStyle='solid'
      padding='4'
      _hover={{ boxShadow: 'inner' }}
    >
      <Heading as='h4' color='gray.700'>
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
