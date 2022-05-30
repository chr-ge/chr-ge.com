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
import { motion } from 'framer-motion'
import type { Image, Skill, Tag } from 'utils/types'

const MotionB = motion(Box)

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
      <Flex flex='3' align='flex-end' pos='relative'>
        <MotionB
          pos='absolute'
          pt='4'
          px='4'
          bg='#F9FBFD'
          w='100%'
          left='0'
          right='0'
          borderTop='1px solid black'
          borderLeft='1px solid black'
          borderRight='1px solid black'
          borderTopRadius='30px'
          initial={{ top: '5rem' }}
          whileHover={{ top: -1072 + 80 }}
          transition={{ duration: 4 }}
        >
          <Box
            w='100%'
            pos='relative'
            borderTopRadius='15px'
            overflow='hidden'
            borderTop='1px solid black'
            borderLeft='1px solid black'
            borderRight='1px solid black'
          >
            <NextImage
              src='/img/projects/kalabam-full.png'
              width={1072}
              height={2478}
              objectFit='contain'
              objectPosition='center top'
            />
          </Box>
        </MotionB>
      </Flex>
    </Stack>
  )
}
