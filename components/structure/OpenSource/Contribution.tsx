import { useTranslation } from 'next-i18next'
import {
  Badge,
  Flex,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
} from '@chakra-ui/react'
import type { RoleType, Skill } from 'utils/types'
import { config } from 'configs/config'

export interface ContributionProps {
  user: string
  repository: string
  role: RoleType
  githubUrl: string
  description: { en: string; fr: string }
  topics: string[]
  language: Skill
}

export const Contribution: React.FC<ContributionProps> = ({
  user,
  repository,
  role,
  githubUrl,
  description,
  topics,
  language,
}) => {
  const { t, i18n } = useTranslation('common')

  return (
    <LinkBox
      p='4'
      borderColor='black'
      border='1px solid'
      shadow={`8px 8px 0px 0px ${language.color}`}
      transition='all 0.1s ease-in-out'
      _hover={{ shadow: 'none', transform: 'translate(8px, 8px)' }}
    >
      <Flex h='full' flexDir='column'>
        <HStack spacing='1' fontSize='xl'>
          <Text whiteSpace='nowrap'>{user}</Text>
          <Text as='span'>/</Text>
          <Text fontWeight='semibold'>
            <LinkOverlay
              href={githubUrl}
              isExternal
              data-splitbee-event={config.splitbee.events.osc}
              data-splitbee-event-type={repository}
            >
              {repository}
            </LinkOverlay>
          </Text>
        </HStack>
        <Flex mt='2' mb='4'>
          <Badge colorScheme={role.color}>{t(role.label)}</Badge>
        </Flex>
        <Text flex='1' mb='4'>
          {description[i18n.language as keyof typeof description]}
        </Text>
        <Flex justify='space-between'>
          <HStack>
            {topics.map((topic) => (
              <Tag
                key={topic}
                variant='subtle'
                colorScheme='blue'
                borderRadius='full'
              >
                {topic}
              </Tag>
            ))}
          </HStack>
          <Icon as={language.icon} color={language.color} boxSize='6' />
        </Flex>
      </Flex>
    </LinkBox>
  )
}
