import { useTranslation } from 'next-i18next'
import { Flex, Link, Text, HStack, IconButton, Stack } from '@chakra-ui/react'
import { VscArrowUp } from 'react-icons/vsc'
import { config } from 'configs/config'

const socialLinks: { name: string; href: string }[] = [
  { name: 'Email', href: config.email_link },
  { name: 'Github', href: config.github },
  { name: 'LinkedIn', href: config.linkedin },
  { name: 'PGP/GPG Key', href: '/gpg.txt' },
]

export const Footer: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Flex
      as='footer'
      align={{ base: 'stretch', md: 'center' }}
      justify='space-between'
      direction={{ base: 'column', md: 'row' }}
      mt='4'
      pt='12'
      pb='24'
      px={{ base: '4', md: '8' }}
      borderColor='black'
      borderTop='1px solid'
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '6', lg: '16' }}
        mb={{ base: '16', md: 0 }}
      >
        <Text casing='uppercase'>{config.copyright}</Text>
        <Text casing='uppercase' cursor='url(/img/maple-leaf.png), text'>
          {t('made-in-mtl')}
        </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'flex-start', md: 'center' }}
        spacing='16'
      >
        <HStack
          spacing='8'
          w='full'
          justify={{ base: 'space-between', sm: 'flex-start' }}
        >
          {socialLinks.map(({ name, href }) => (
            <Link
              key={name}
              title={name}
              href={href}
              variant='social'
              data-splitbee-event={config.splitbee.events.externalLink}
              data-splitbee-event-type={name}
              isExternal
            >
              {name}
            </Link>
          ))}
        </HStack>
        <IconButton
          aria-label={t('go-to-top')}
          title={t('go-to-top')}
          icon={<VscArrowUp />}
          variant='icon'
          size='icon'
          onClick={() => window.scrollTo(0, 0)}
          data-splitbee-event={config.splitbee.events.backToTop}
        />
      </Stack>
    </Flex>
  )
}
