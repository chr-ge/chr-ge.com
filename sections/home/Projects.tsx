import { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useMediaQuery } from 'react-responsive'
import { config } from 'configs/config'
import Project from 'components/Project'
import projects from 'data/projects'

const Projects: FC = () => {
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
      as='section'
      bgGradient={useColorModeValue(
        'linear(to-r, #e0eafc, #cfdef3)',
        'linear(to-r, teal.900, #363795)'
      )}
      borderRadius='lg'
      marginBottom='4'
      padding={['0', '4']}
    >
      <Container maxW='container.xl'>
        <Heading
          as='h2'
          id='projects'
          fontSize='5xl'
          marginBottom='12'
          marginTop='8'
          color={useColorModeValue('blue.900', 'blue.100')}
          sx={{ scrollMarginTop: '4rem' }}
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
              overflow='hidden'
            >
              <Box bg={useColorModeValue('white', 'black')} width='3' />
              <Box
                bg={useColorModeValue('blue.600', 'blue.400')}
                width='1'
                marginLeft='-2'
              />
              <Box
                ref={heightRef}
                bg={useColorModeValue('white', 'black')}
                width='1'
                height={h}
                pos='absolute'
                marginLeft='1'
              />
            </Box>
          )}
          <Box flex={1}>
            {projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </Box>
        </Flex>
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
