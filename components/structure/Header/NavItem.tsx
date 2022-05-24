import { useTranslation } from 'next-i18next'
import type { TFuncKey } from 'react-i18next'
import NextLink from 'next/link'
import { Button, Flex, Text } from '@chakra-ui/react'

export interface NavItemProps {
  name: TFuncKey<'common'>
  href: string
}

export const NavItem: React.FC<NavItemProps> = ({ name, href }) => {
  const { t } = useTranslation('common')

  return (
    <NextLink href={href} passHref>
      <Button as='a' variant='navItem'>
        <Text>{t(name)}</Text>
      </Button>
    </NextLink>
  )
}
