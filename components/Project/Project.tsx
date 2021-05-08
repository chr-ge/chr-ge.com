import { FC } from 'react'
import {
  Badge,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Link,
  IconButton,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { useKeenSlider } from 'keen-slider/react'
import { InView } from 'react-intersection-observer'
import { useMediaQuery } from 'react-responsive'
import { ImLink } from 'react-icons/im'
import { FaCode } from 'react-icons/fa'
import useLanguage from 'hooks/useLanguage'
import MotionBox from 'components/MotionBox'
import Technology from './Technology'
import type { ProjectType } from 'types'
import 'keen-slider/keen-slider.min.css'

const Project: FC<ProjectType> = ({
  title,
  description_en,
  description_fr,
  images,
  homepage,
  github,
  technologies,
  tags,
}) => {
  const { isEnglish } = useLanguage()
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
  })

  const isLargerThan48em = useMediaQuery({ query: '(min-width: 48em)' })

  const cardBg = useColorModeValue('white', 'black')

  return (
    <InView threshold={0.25}>
      {({ ref: inViewRef, inView }) => (
        <MotionBox
          as='article'
          width='100%'
          position='relative'
          marginBottom={['14', '20']}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Flex ref={inViewRef}>
            {isLargerThan48em && (
              <Box flex={1} marginRight='2'>
                <Box ref={sliderRef} className='keen-slider'>
                  {images.map((image) => (
                    <Box
                      key={image.alt}
                      className='keen-slider__slide'
                      width='100%'
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        draggable='false'
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
            <Flex
              direction='column'
              bgColor={cardBg}
              padding='4'
              width={['100%', '100%', '80']}
            >
              <Heading>{title}</Heading>
              <Text marginTop='4'>
                {isEnglish ? description_en : description_fr}
              </Text>
              <Flex marginTop='6'>
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
              <Box marginTop='6' marginBottom='6'>
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
                      isExternal
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
                      isExternal
                    />
                  </Tooltip>
                )}
              </Box>
              {!isLargerThan48em && (
                <Box ref={sliderRef} className='keen-slider' marginBottom='6'>
                  {images.map((image) => (
                    <Box
                      key={image.alt}
                      className='keen-slider__slide'
                      width='100%'
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        draggable='false'
                      />
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
        </MotionBox>
      )}
    </InView>
  )
}

export default Project
