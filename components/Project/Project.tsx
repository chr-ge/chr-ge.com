import { FC } from 'react'
import {
  Badge,
  Box,
  Image,
  Circle,
  Flex,
  Heading,
  Text,
  Link,
  IconButton,
  Tooltip,
  useMediaQuery,
} from '@chakra-ui/react'
import { useKeenSlider } from 'keen-slider/react'
import { ImLink } from 'react-icons/im'
import { FaCode } from 'react-icons/fa'
import { Project as ProjectType } from 'types'
import Technology from './Technology'
import 'keen-slider/keen-slider.min.css'

const Project: FC<ProjectType> = ({
  title,
  description,
  images,
  homepage,
  github,
  technologies,
  tags
}) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
  })

  const [isLargerThanMobile] = useMediaQuery('(min-width: 30em)')

  return (
    <Box
      as='article'
      width='100%'
      position='relative'
      marginBottom={['14', '20']}
    >
      {isLargerThanMobile && (
        <Circle
          id='circle-1'
          boxSize='8'
          position='absolute'
          top='3'
          left='-12'
          bg='white'
          boxShadow='md'
        />
      )}
      <Flex>
        {isLargerThanMobile && (
          <Box flex={1} marginRight='2'>
            <div ref={ref} className='keen-slider'>
              {images.map((image) => (
                <Box
                  key={image.alt}
                  className='keen-slider__slide'
                  width='100%'
                >
                  <Image src={image.src} alt={image.alt} draggable='false' />
                </Box>
              ))}
            </div>
          </Box>
        )}
        <Flex
          direction='column'
          bgColor='white'
          padding='4'
          width={['100%', '80']}
        >
          <Heading>{title}</Heading>
          <Text marginTop='4'>{description}</Text>
          <Flex marginTop='4'>
            {tags.map((tag) => (
              <Badge
                key={tag.label}
                colorScheme={tag.colorScheme}
                marginRight='1'
                variant='solid'
              >
                {tag.label}
              </Badge>
            ))}
          </Flex>
          <Box marginTop='4' marginBottom='6'>
            {homepage && (
              <Tooltip
                label='Visit Website'
                placement={github ? 'left' : 'right'}
              >
                <IconButton
                  as={Link}
                  href={homepage}
                  aria-label='Website'
                  icon={<ImLink />}
                  colorScheme='teal'
                  isRound
                />
              </Tooltip>
            )}
            {github && (
              <Tooltip label='View Code Repository' placement='right'>
                <IconButton
                  as={Link}
                  href={github}
                  aria-label='Github'
                  icon={<FaCode />}
                  colorScheme='teal'
                  marginLeft={homepage ? '2' : undefined}
                  isRound
                />
              </Tooltip>
            )}
          </Box>
          {!isLargerThanMobile && (
            <Box ref={ref} className='keen-slider' marginBottom='6'>
              {images.map((image) => (
                <Box
                  key={image.alt}
                  className='keen-slider__slide'
                  width='100%'
                >
                  <Image src={image.src} alt={image.alt} draggable='false' />
                </Box>
              ))}
            </Box>
          )}
          <Flex marginTop='auto' wrap='wrap' justify='space-between'>
            {technologies.map((technology) => (
              <Technology key={technology.name} {...technology} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Project
