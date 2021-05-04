import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import { useMediaQuery } from 'react-responsive'
import Project from 'components/Project'
import projects from 'data/projects'

const Projects = () => {
  const { t } = useTranslation('common')
  const heightRef = useRef<HTMLDivElement>(null)
  const [h, setH] = useState(0)

  const isLargerThanMobile = useMediaQuery({ query: '(min-width: 30em)' })

  const scrollPosition = () => {
    if (heightRef.current) {
      const height =
        window.pageYOffset - heightRef.current.getBoundingClientRect().top
      setH(height / 2)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollPosition)
    return () => window.removeEventListener('scroll', scrollPosition)
  }, [])

  return (
    <Box
      bgGradient='linear(to-r, #e0eafc, #cfdef3)'
      borderRadius='lg'
      padding={['0', '4']}
    >
      <Container maxW='container.xl'>
        <Heading
          id='projects'
          fontSize='5xl'
          marginBottom='8'
          marginTop='4'
          sx={{ scrollMarginTop: '3rem' }}
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
              <Box bg='blue.600' width='1' marginLeft='-2' />
              <Box
                ref={heightRef}
                bg='white'
                width='1'
                height={h}
                pos='absolute'
                marginLeft='1'
              />
            </Box>
          )}
          <Box flex={1}>
            {projects.map((project, i) => (
              <Project key={project.id} {...project} />
            ))}
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Projects
