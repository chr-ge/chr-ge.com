import { useTranslation } from 'next-i18next'
import { Heading, VStack } from '@chakra-ui/react'
import { projects } from 'data/projects'
import { OtherProjectsMarquee } from './OtherProjectsMarquee'
import { Project } from './Project'

export const SelectedProjects: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <VStack
        id='projects'
        as='section'
        align='stretch'
        py='20'
        px={{ base: '4', md: '8' }}
        spacing='16'
        sx={{ scrollMarginTop: '105px' }}
      >
        <Heading as='h2' variant='section' size='2xl'>
          {t('selected-projects')}
        </Heading>
        <VStack align='stretch' spacing='12'>
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </VStack>
      </VStack>
      <OtherProjectsMarquee />
    </>
  )
}
