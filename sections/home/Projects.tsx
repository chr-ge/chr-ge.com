import { useTranslation } from 'next-i18next'
import { Box, Container, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import Project from 'components/Project'
import projects from 'data/projects'

const Projects = () => {
  const { t } = useTranslation('common')

  const [isLargerThanMobile] = useMediaQuery('(min-width: 30em)')

  return (
    <Box
      bgGradient='linear(to-r, #e0eafc, #cfdef3)'
      borderRadius='lg'
      padding={['0', '4']}
    >
      <Container maxW='container.xl'>
        <Heading
          fontSize='5xl'
          marginBottom='8'
          marginTop='4'
          paddingTop={['4', '0']}
          textAlign={['center', 'left']}
        >
          {t('my-projects')}
        </Heading>
        <Flex>
          {isLargerThanMobile && (
            <Box
              d='flex'
              justifyContent='center'
              pos='relative'
              width='8'
              marginRight='4'
            >
              <Box bg='white' width='3' />
            </Box>
          )}
          <Box flex={1}>
            {projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Projects
