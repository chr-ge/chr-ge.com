import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { config } from 'configs/config'
import Project from 'components/Project'
import projects from 'data/projects'

const Projects: FC = () => {
  const { t } = useTranslation('common')

  return (
    <Box
      as='section'
      bgGradient={useColorModeValue(
        'linear(to-r, #e0eafc, #cfdef3)',
        'linear(to-r, teal.900, #363795)'
      )}
      borderRadius='lg'
      marginBottom='4'
      py='4'
      px={['0', '4']}
    >
      <Container maxW='container.xl' mt='8'>
        <Heading
          as='h2'
          id='projects'
          fontSize='5xl'
          mb='12'
          color={useColorModeValue('blue.900', 'blue.100')}
          sx={{ scrollMarginTop: '4rem' }}
          textAlign={['center', 'left']}
        >
          {t('my-projects')}
        </Heading>
        <Box>
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </Box>
        <Box textAlign='center' marginY='6' paddingBottom={['6', '0']}>
          <Box
            bgColor={useColorModeValue('white', 'black')}
            display='inline-block'
            rounded='2xl'
            shadow='xl'
          >
            <Text paddingY='4' paddingX='8' fontSize='lg'>
              {t('more-projects')}
              <Link color='blue.500' href={config.github} isExternal>
                Github
              </Link>
              .
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Projects
