import { useTranslation } from 'next-i18next'
import NextImage from 'next/image'
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
import type { Project } from '@utils/types'
import { config } from '@config/config'

const MotionBox = motion(Box)

export const ProjectShowcase: React.FC<Project> = ({
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
        <Divider opacity='1' />
        <Text>{description[i18n.language as keyof typeof description]}</Text>
        <HStack spacing='4'>
          {homepage && (
            <Link href={homepage} variant='projectLink' isExternal>
              {t('website')}
            </Link>
          )}
          {github && (
            <Link href={github} variant='projectLink' isExternal>
              Github
            </Link>
          )}
        </HStack>
      </VStack>
      <Flex flex='3' align='flex-end' pos='relative'>
        <Box
          display={{ md: 'none' }}
          mt='4'
          pt='1.5'
          px='1.5'
          border='1px solid black'
          borderBottom='none'
          borderTopRadius='1.375rem'
        >
          <ImageWithBorder title={title} image={image} />
        </Box>
        <MotionBox
          display={{ base: 'none', md: 'block' }}
          pos='absolute'
          pt='3.5'
          px='3.5'
          bg='#F9FBFD'
          w='full'
          top='0'
          left='0'
          right='0'
          border='1px solid black'
          borderBottom='0'
          borderTopRadius='1.875rem'
          initial={{ y: '4rem' }}
          whileHover={{ y: '2.5rem' }}
        >
          <ImageWithBorder title={title} image={image} />
        </MotionBox>
      </Flex>
    </Stack>
  )
}

const ImageWithBorder: React.FC<Pick<Project, 'title' | 'image'>> = ({
  title,
  image,
}) => (
  <Box
    pos='relative'
    w='full'
    borderTopRadius='2xl'
    overflow='hidden'
    borderColor='black'
    borderTop='1px solid'
    borderLeft='1px solid'
    borderRight='1px solid'
  >
    <NextImage src={image.src} alt={title} draggable='false' />
  </Box>
)
