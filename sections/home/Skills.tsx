import { useTranslation } from 'next-i18next'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import { Category } from 'components/Skills'
import skills from 'data/skills'

const Skills = () => {
  const { t } = useTranslation('common')

  return (
    <Box
      as='section'
      bg={useColorModeValue('gray.50', 'black')}
      borderRadius='lg'
      marginBottom='4'
      padding={['0', '4']}
    >
      <Container maxW='container.xl'>
        <Heading
          as='h2'
          id='projects'
          fontSize='5xl'
          marginBottom='10'
          marginTop='6'
          color='primary.800'
          sx={{ scrollMarginTop: '3rem' }}
          paddingTop={['4', '0']}
          textAlign={['center', 'left']}
        >
          {t('whats-on-the-menu')}
        </Heading>
        <SimpleGrid columns={[1, 2, 2, 3]} spacing={20} marginBottom='10'>
          {skills.map((skill) => (
            <Category key={skill.category} {...skill} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Skills
