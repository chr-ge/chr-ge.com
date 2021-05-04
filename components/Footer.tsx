import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { Flex, Link, Icon, Text, HStack } from '@chakra-ui/react'
import { FaNpm, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import siteConfig from 'configs/site-config'

const Footer: FC = () => {
  const { t } = useTranslation('common')

  return (
    <Flex
      as="footer"
      bg='primary.700'
      padding='4'
      marginTop='4'
      borderRadius='lg'
      align='center'
      justify='space-between'
    >
      <Text color='gray.200' fontWeight='semibold'>
        &copy; {new Date().getFullYear()} George Christeas.{' '}
        {t('proudly_made_in_mtl')}
      </Text>
      <HStack spacing='3'>
        <Link href={siteConfig.github} color='white' isExternal>
          <Icon
            as={FaGithub}
            aria-label="Github"
            boxSize={10}
            bg='primary.500'
            borderRadius='full'
            padding='1'
            _hover={{ transform: 'scale(1.05)'}}
          />
        </Link>
        <Link href={siteConfig.npm} color='white' isExternal>
          <Icon
            as={FaNpm}
            aria-label="NPM"
            boxSize={10}
            bg='primary.500'
            borderRadius='full'
            padding='1'
            _hover={{ transform: 'scale(1.05)'}}
          />
        </Link>
        <Link href={siteConfig.email} color='white'>
          <Icon
            as={HiOutlineMail}
            aria-label="Email"
            boxSize={10}
            bg='primary.500'
            borderRadius='full'
            padding='1'
            _hover={{ transform: 'scale(1.05)'}}
          />
        </Link>
      </HStack>
    </Flex>
  )
}

export default Footer
