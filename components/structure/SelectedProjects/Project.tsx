import { useTranslation } from 'next-i18next'
import NextImage from 'next/image'
import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
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
    <Stack
      direction={{ base: 'column', md: 'row' }}
      h='96'
      px='6'
      borderColor='black'
      border='1px solid'
      spacing='24'
      role='group'
      overflow='hidden'
    >
      <VStack flex='2' align='flex-start' justify='center' spacing='4'>
        <Heading as='h4'>{title}</Heading>
        <Divider />
        <Text>{description[i18n.language as keyof typeof description]}</Text>
      </VStack>
      <Flex
        flex='3'
        align='flex-end'
        pt='20'
        _groupHover={{ pt: 12 }}
        transition='padding 0.1s ease-in'
      >
        <Box
          pt='4'
          px='4'
          bg='#F9FBFD'
          h='100%'
          w='100%'
          borderTop='1px solid black'
          borderLeft='1px solid black'
          borderRight='1px solid black'
          borderTopRadius='30px'
        >
          <Box
            w='100%'
            h='100%'
            pos='relative'
            borderTopRadius='15px'
            overflow='hidden'
            borderTop='1px solid black'
            borderLeft='1px solid black'
            borderRight='1px solid black'
          >
            <NextImage
              src='/img/projects/kalabam.png'
              // width={700}
              // height={300}
              // layout='fill'
              layout='responsive'
              height='100%'
              width='100%'
              objectFit='contain'
              objectPosition='center top'
            />
          </Box>
        </Box>
      </Flex>
    </Stack>
  )
}
