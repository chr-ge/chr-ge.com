import { FC } from 'react'
import {
  LinkBox,
  chakra,
  Flex,
  Icon,
  Tag,
  Text,
  LinkOverlay,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import useLanguage from 'hooks/useLanguage'
import type { ContributionType } from 'types'

const Contribution: FC<ContributionType> = ({
  user,
  repository,
  role,
  github,
  description_en,
  description_fr,
  topics,
  language,
}) => {
  const { isEnglish } = useLanguage()

  return (
    <LinkBox
      as='article'
      className='keen-slider__slide'
      padding='4'
      borderColor={useColorModeValue('white', 'black')}
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderStyle='solid'
      borderWidth='thin'
      rounded='lg'
      shadow='lg'
      borderBottomColor={language.color}
      borderBottomWidth='thick'
      _hover={{ shadow: '2xl' }}
    >
      <Flex marginBottom='2' align='center' justify='space-between'>
        <LinkOverlay href={github} fontSize={['xl', '2xl']} isExternal>
          {user}/<chakra.span fontWeight='bold'>{repository}</chakra.span>
        </LinkOverlay>
        <Icon
          as={language.icon}
          display={['none', 'inline-block']}
          color={language.color}
          boxSize='6'
        />
      </Flex>
      <Badge colorScheme={role.color} marginBottom='4'>
        {isEnglish ? role.label_en : role.label_fr}
      </Badge>
      <Text noOfLines={2}>
        {!isEnglish && description_fr ? description_fr : description_en}
      </Text>
      <Flex marginTop='6'>
        {topics.map((topic) => (
          <Tag
            key={topic}
            rounded='full'
            colorScheme='blue'
            variant='subtle'
            marginLeft='1'
          >
            {topic}
          </Tag>
        ))}
      </Flex>
    </LinkBox>
  )
}

export default Contribution
