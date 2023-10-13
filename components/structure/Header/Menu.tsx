import { Stack } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavItem, type NavItemProps } from './NavItem'

const navItems: Omit<NavItemProps, 'onClose'>[] = [
  { name: 'home', href: '/' },
  { name: 'projects', href: '/#projects' },
  { name: 'bookmarks', href: '/bookmarks' },
  { name: 'contact', href: '/#contact' },
]

const MotionStack = motion(Stack)

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => (
  <AnimatePresence initial={false}>
    {isOpen && (
      <MotionStack
        key='header-menu'
        as='nav'
        pos='absolute'
        zIndex='sticky'
        left='0'
        right='0'
        py='4'
        px={{ base: '4', md: '8' }}
        direction={{ base: 'column', md: 'row' }}
        spacing='4'
        borderColor='black'
        borderBottom='1px solid'
        bgGradient='linear(to-r, #DFE9F3, white)'
        initial={{ opacity: 0, top: '0rem' }}
        animate={{ opacity: 1, top: 'var(--chakra-sizes-header-height)' }}
        exit={{ opacity: 0, top: '0rem' }}
        transition={{ ease: 'circOut' }}
      >
        {navItems.map((item) => (
          <NavItem key={item.name} onClose={onClose} {...item} />
        ))}
      </MotionStack>
    )}
  </AnimatePresence>
)
