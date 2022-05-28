import { useTranslation } from 'next-i18next'
import { Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import type { Image, Skill, Tag } from 'utils/types'

export interface ProjectProps {
  id: string
  title: string
  description: {
    en: string
    fr: string
  }
  images: Image[]
  homepage?: string
  github?: string
  technologies: Skill[]
  tags: Tag[]
}

export const Project: React.FC<ProjectProps> = ({ title, description }) => {
  const { i18n } = useTranslation('common')

  return (
    <Flex h='96' px='6' borderColor='black' border='1px solid'>
      <VStack flex='2' align='flex-start' justify='center' spacing='4'>
        <Heading as='h4'>{title}</Heading>
        <Divider />
        <Text>{description[i18n.language as keyof typeof description]}</Text>
      </VStack>
      <Flex flex='3'></Flex>
    </Flex>
  )
}
