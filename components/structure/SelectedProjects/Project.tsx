import { useTranslation } from 'next-i18next'
import NextImage from 'next/legacy/image'
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { Image, Skill, Tag } from 'utils/types'
import { config } from 'configs/config'

const MotionBox = motion(Box)

export interface ProjectProps {
  id: string
  title: string
  description: {
    en: string
    fr: string
  }
  image: Image
  homepage?: string
  github?: string
  technologies: Skill[]
  tags: Tag[]
}

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  homepage,
  github,
}) => {
  const { t, i18n } = useTranslation('common')

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      h='96'
      px='6'
      borderColor='black'
      border='1px solid'
      spacing={{ base: '0', md: '24' }}
      role='group'
      overflow='hidden'
    >
      <VStack flex='2' py='4' align='flex-start' justify='center' spacing='4'>
        <Heading as='h3'>{title}</Heading>
        <Divider />
        <Text>{description[i18n.language as keyof typeof description]}</Text>
        <HStack spacing='4'>
          {homepage && (
            <Link
              href={homepage}
              variant='projectLink'
              data-splitbee-event={config.splitbee.events.projectLink}
              data-splitbee-event-type='Website'
              data-splitbee-event-project={title}
              isExternal
            >
              {t('website')}
            </Link>
          )}
          {github && (
            <Link
              href={github}
              variant='projectLink'
              data-splitbee-event={config.splitbee.events.projectLink}
              data-splitbee-event-type='Github'
              data-splitbee-event-project={title}
              isExternal
            >
              Github
            </Link>
          )}
        </HStack>
      </VStack>
      <Flex flex='3' align='flex-end' pos='relative'>
        <MotionBox
          pos='absolute'
          pt={{ base: '2', md: '4' }}
          px={{ base: '2', md: '4' }}
          bg='#F9FBFD'
          w='full'
          top='0'
          left='0'
          right='0'
          border='1px solid black'
          borderTopRadius='30px'
          initial={{ y: '5rem' }}
          whileHover={{ y: '2.5rem' }}
        >
          <Box
            pos='relative'
            w='full'
            borderTopRadius={{ base: '1.25rem', md: '0.9375rem' }}
            overflow='hidden'
            borderColor='black'
            borderTop='1px solid'
            borderLeft='1px solid'
            borderRight='1px solid'
          >
            <NextImage
              src={image.src}
              {...image.dimensions}
              objectFit='contain'
              objectPosition='center top'
              alt={title}
              draggable='false'
            />
          </Box>
        </MotionBox>
      </Flex>
    </Stack>
  )
}
