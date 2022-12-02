import { useTranslation } from 'next-i18next'
import type { TFuncKey } from 'i18next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '@chakra-ui/react'

export interface NavItemProps {
  name: TFuncKey<'common'>
  href: string
  onClose: () => void
}

export const NavItem: React.FC<NavItemProps> = ({ name, href, onClose }) => {
  const { t } = useTranslation('common')
  const { pathname } = useRouter()

  return (
    <NextLink href={href} passHref>
      <Button
        as='a'
        aria-current={pathname === href ? 'page' : 'false'}
        variant='navItem'
        onClick={onClose}
      >
        {t(name)}
      </Button>
    </NextLink>
  )
}
