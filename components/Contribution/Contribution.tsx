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
import { useLanguage } from 'utils/hooks/useLanguage'
import type { ContributionType } from 'types'
import { config } from 'configs/config'

const Contribution: FC<ContributionType> = ({
  user,
  repository,
  role,
  github,
  description,
  topics,
  language,
}) => {
  const { locale, isEnglish } = useLanguage()

  return (
    <LinkBox
      as='article'
      padding='4'
      borderColor={useColorModeValue('white', 'black')}
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderStyle='solid'
      borderWidth='thin'
      rounded='lg'
      width={['100%', '100%', '40%']}
      shadow='lg'
      borderBottomColor={language.color}
      borderBottomWidth='thick'
      _hover={{ shadow: '2xl' }}
    >
      <Flex marginBottom='2' align='center' justify='space-between'>
        <LinkOverlay
          href={github}
          fontSize={['xl', '2xl']}
          data-splitbee-event={config.splitbee.events.osc}
          data-splitbee-event-type={repository}
          isExternal
        >
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
      <Text noOfLines={2}>{description[locale]}</Text>
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
