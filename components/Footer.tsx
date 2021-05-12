import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Flex,
  Link,
  Icon,
  Text,
  HStack,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaNpm, FaGithub, FaChevronUp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import useLanguage from 'hooks/useLanguage'
import siteConfig from 'configs/site-config'

const Footer: FC = () => {
  const { t } = useTranslation('common')
  const { isEnglish } = useLanguage()

  const iconBg = useColorModeValue('primary.500', 'primary.700')
  const textColor = useColorModeValue('gray.50', 'gray.300')

  return (
    <Flex
      as='footer'
      bg={useColorModeValue('primary.700', 'primary.900')}
      padding='8'
      marginTop='4'
      borderRadius='lg'
      align='center'
      justify='space-between'
      direction={['column', 'row']}
    >
      <Text
        flex={1}
        flexBasis={0}
        color={textColor}
        fontWeight='semibold'
        align={['center', 'left']}
      >
        &copy; {new Date().getFullYear()} George Christeas.{' '}
        {t('proudly_made_in_mtl')}
      </Text>
      <HStack
        flex={1}
        flexBasis={0}
        justify='center'
        spacing='3'
        marginTop={['10', '0']}
      >
        <Link
          href={siteConfig.github}
          color={textColor}
          _focus={{ boxShadow: 'secondary' }}
          isExternal
        >
          <Icon
            as={FaGithub}
            aria-label='Github'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            padding='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={siteConfig.npm}
          color={textColor}
          _focus={{ boxShadow: 'secondary' }}
          isExternal
        >
          <Icon
            as={FaNpm}
            aria-label='NPM'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            padding='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
        <Link
          href={siteConfig.email_link}
          _focus={{ boxShadow: 'secondary' }}
          color={textColor}
        >
          <Icon
            as={HiOutlineMail}
            aria-label='Email'
            boxSize={12}
            bg={iconBg}
            borderRadius='full'
            padding='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
      </HStack>
      <HStack
        flex={1}
        flexBasis={0}
        spacing='3'
        justify='flex-end'
        marginTop={['10', '0']}
      >
        <Link
          href={isEnglish ? '/fr?ref=Footer' : '/?ref=Footer'}
          color={textColor}
          title={isEnglish ? 'Français' : 'English'}
          _hover={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'secondary' }}
        >
          <Center
            boxSize={10}
            bg={iconBg}
            borderRadius='full'
            padding='1'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          >
            <Text fontSize='xl' fontWeight='bold'>
              {isEnglish ? 'FR' : 'EN'}
            </Text>
          </Center>
        </Link>
        <Link
          href='/#top'
          title='Go to top'
          color={textColor}
          _focus={{ boxShadow: 'secondary' }}
        >
          <Icon
            as={FaChevronUp}
            aria-label={t('go-to-top')}
            boxSize={10}
            bg={iconBg}
            borderRadius='full'
            padding='1.5'
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          />
        </Link>
      </HStack>
    </Flex>
  )
}

export default Footer
