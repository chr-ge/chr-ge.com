import { FC, useState } from 'react'
import { useTranslation } from 'next-i18next'
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
  Button,
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
  const { t } = useTranslation('common')
  const { isEnglish } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
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
              <Flex flex={1} marginRight='2' pos='relative' align='center'>
                <Box ref={sliderRef} className='keen-slider'>
                  {images.map((image) => (
                    <Box
                      key={image.alt}
                      className='keen-slider__slide'
                      width='100%'
                      minWidth='100%'
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        draggable='false'
                      />
                    </Box>
                  ))}
                </Box>
                {slider && (
                  <Flex
                    pos='absolute'
                    left={0}
                    right={0}
                    marginX='auto'
                    bottom='-4'
                    align='center'
                    justify='center'
                  >
                    {[...Array(slider.details().size).keys()].map((i) => (
                      <Box
                        key={i}
                        boxSize='3'
                        borderRadius='full'
                        aria-label='Change Image'
                        title={`Image ${i + 1} of ${slider.details().size}`}
                        bgColor={i === currentSlide ? 'purple.500' : 'gray.400'}
                        onClick={() => slider.moveToSlideRelative(i)}
                        role='button'
                        marginRight='2'
                      />
                    ))}
                  </Flex>
                )}
              </Flex>
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
                    label={t('view-website')}
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
                  <Tooltip label={t('view-code')} placement='right'>
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
                      minW='100%'
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
