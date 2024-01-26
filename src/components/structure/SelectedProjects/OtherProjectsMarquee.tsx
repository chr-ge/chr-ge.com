import { useTranslation } from 'next-i18next'
import {
  Flex,
  HStack,
  Link,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import { config } from '@config/config'

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
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${loop} infinite 20s linear`

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
        spacing='12'
        whiteSpace='nowrap'
        animation={animation}
        role='group'
        _hover={{
          animationPlayState: 'paused',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Link
            key={i}
            href={config.github}
            variant='moreProjects'
            py='3'
            data-umami-event={config.umami.events.externalLink}
            data-umami-event-type='Github'
            isExternal
          >
            {t('check-out-more-projects')}
          </Link>
        ))}
      </HStack>
    </Flex>
  )
}
