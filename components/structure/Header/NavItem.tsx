import { useTranslation } from 'next-i18next'
import type { TFuncKey } from 'react-i18next'
import NextLink from 'next/link'
import { Button, Text } from '@chakra-ui/react'

export interface NavItemProps {
  name: TFuncKey<'common'>
  href: string
  onClose: () => void
}

export const NavItem: React.FC<NavItemProps> = ({ name, href, onClose }) => {
  const { t } = useTranslation('common')

  return (
    <NextLink href={href} passHref>
      <Button as='a' variant='navItem' onClick={onClose}>
        <Text>{t(name)}</Text>
      </Button>
    </NextLink>
  )
}
