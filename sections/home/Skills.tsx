import { FC } from 'react'
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

export const Skills: FC = () => {
  const { t } = useTranslation('common')

  return (
    <Box
      as='section'
      bg={useColorModeValue('gray.50', 'black')}
      borderRadius='lg'
      mb='4'
      py='4'
      px={['0', '4']}
    >
      <Container maxW='container.xl' mt='8'>
        <Heading
          as='h2'
          id='projects'
          fontSize='5xl'
          mb='12'
          color='primary.800'
          sx={{ scrollMarginTop: '3rem' }}
          textAlign={['center', 'left']}
        >
          {t('skills-heading')}
        </Heading>
        <SimpleGrid columns={[1, null, 2, 3]} spacing='20' pb='12'>
          {skills.map((skill, i) => (
            <Category key={skill.category} index={i + 1} {...skill} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
