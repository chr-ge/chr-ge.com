import { Stack } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavItem, type NavItemProps } from './NavItem'

const navItems: NavItemProps[] = [
  { name: 'home', href: '/' },
  { name: 'projects', href: '/#projects' },
  { name: 'bookmarks', href: '/bookmarks' },
  { name: 'contact', href: '/#contact' },
]

const MotionStack = motion(Stack)

interface MenuProps {
  isOpen: boolean
}

export const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <AnimatePresence initial={false}>
      {isOpen && (
        <MotionStack
          key='header-menu'
          as='nav'
          pos='absolute'
          zIndex='docked'
          left='0'
          right='0'
          p='4'
          direction={{ base: 'column', md: 'row' }}
          spacing='4'
          borderColor='black'
          borderBottom='1px solid'
          style={{
            background: 'linear-gradient(90deg, #DFE9F3 0%, #FFFFFF 100%)',
          }}
          initial={{ opacity: 0, top: 0 }}
          animate={{ opacity: 1, top: 105 }}
          exit={{ opacity: 0, top: 0 }}
        >
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </MotionStack>
      )}
    </AnimatePresence>
  )
}
