import { useTranslation } from 'next-i18next'
import type common from '@public/locales/en/common.json'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '@chakra-ui/react'

export interface NavItemProps {
  name: keyof typeof common
  href: string
  onClose: () => void
}

export const NavItem: React.FC<NavItemProps> = ({ name, href, onClose }) => {
  const { t } = useTranslation('common')
  const { pathname } = useRouter()

  return (
    <Button
      as={NextLink}
      href={href}
      aria-current={pathname === href ? 'page' : 'false'}
      variant='navItem'
      onClick={onClose}
    >
      {t(name)}
    </Button>
  )
}
