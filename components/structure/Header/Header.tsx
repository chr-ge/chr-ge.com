import { useTranslation } from 'next-i18next'
import { Button, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { useLanguage } from 'utils/hooks/useLanguage'

export const Header: React.FC = () => {
  const { t } = useTranslation('common')
  const { isEnglish } = useLanguage()

  return (
    <Flex
      as='header'
      pos='sticky'
      zIndex='sticky'
      top='0'
      left='0'
      right='0'
      bg='white'
      align='center'
      justify='space-between'
      px='8'
      pt={{ base: '8', md: '12' }}
      pb='4'
      borderColor='black'
      borderBottom='1px solid'
    >
      <Text fontWeight='bold' fontSize='2xl' casing='uppercase'>
        George Christeas
      </Text>
      <HStack spacing='2'>
        <Button variant='icon' size='icon'>
          {isEnglish ? 'FR' : 'EN'}
        </Button>
        <IconButton
          aria-label={t('open-menu')}
          icon={<HiOutlineMenuAlt4 />}
          variant='icon'
          size='icon'
          p='0'
        />
      </HStack>
    </Flex>
  )
}
