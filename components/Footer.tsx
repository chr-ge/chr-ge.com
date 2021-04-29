import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { Flex, Link, Icon, Text, HStack } from '@chakra-ui/react'
import { FaNpm, FaGithub } from 'react-icons/fa'

const Footer: FC = () => {
  const { t } = useTranslation('common')

  return (
    <Flex
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
        🍁
      </Text>
      <HStack spacing='3'>
        <Link href='https://github.com/chr-ge' color='white' isExternal>
          <Icon
            as={FaGithub}
            boxSize={10}
            bg='primary.500'
            borderRadius='full'
            padding='1'
          />
        </Link>
        <Link href='https://www.npmjs.com/~chr-ge' color='white' isExternal>
          <Icon
            as={FaNpm}
            boxSize={10}
            bg='primary.500'
            borderRadius='full'
            padding='1'
          />
        </Link>
      </HStack>
    </Flex>
  )
}

export default Footer
