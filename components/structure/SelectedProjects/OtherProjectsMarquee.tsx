import { useTranslation } from 'next-i18next'
import { Flex, HStack, Link, keyframes } from '@chakra-ui/react'
import { config } from 'configs/config'

const loop = keyframes({
  '0%': {
    transform: 'translate3d(-25%, 0, 0)',
  },
  '100%': {
    transform: 'translate3d(-50%, 0, 0)',
  },
})

export const OtherProjectsMarquee: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Flex
      pos='relative'
      w='100vw'
      maxWidth='100%'
      borderColor='black'
      borderTop='1px solid'
      overflowX='hidden'
    >
      <HStack
        aria-hidden='true'
        pos='relative'
        py='3'
        spacing='12'
        whiteSpace='nowrap'
        animation={`${loop} 20s linear infinite`}
        role='group'
        _hover={{
          animationPlayState: 'paused',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Link key={i} href={config.github} variant='moreProjects' isExternal>
            {t('check-out-more-projects')}
          </Link>
        ))}
      </HStack>
    </Flex>
  )
}
