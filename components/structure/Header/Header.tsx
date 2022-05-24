import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import { useLanguage } from 'utils/hooks/useLanguage'
import { Menu } from './Menu'

export const Header: React.FC = () => {
  const { t } = useTranslation('common')
  const { isOpen, onToggle } = useDisclosure()
  const { isEnglish } = useLanguage()

  return (
    <Box as='header' pos='sticky' zIndex='sticky' top='0' left='0' right='0'>
      <Flex
        pos='relative'
        zIndex='sticky'
        align='center'
        justify='space-between'
        bg='white'
        pt={{ base: '8', md: '12' }}
        pb='4'
        px={{ base: '4', md: '8' }}
        borderColor='black'
        borderBottom='1px solid'
      >
        <NextLink href='/' passHref>
          <Text
            as='a'
            fontWeight='bold'
            fontSize={{ base: 'lg', md: '2xl' }}
            casing='uppercase'
          >
            George Christeas
          </Text>
        </NextLink>
        <HStack spacing='2'>
          <Button variant='icon' size='icon'>
            {isEnglish ? 'FR' : 'EN'}
          </Button>
          <IconButton
            aria-label={t(isOpen ? 'close-menu' : 'open-menu')}
            icon={isOpen ? <VscChromeClose /> : <HiOutlineMenuAlt4 />}
            variant='icon'
            size='icon'
            onClick={onToggle}
          />
        </HStack>
      </Flex>
      <Menu isOpen={isOpen} />
    </Box>
  )
}
