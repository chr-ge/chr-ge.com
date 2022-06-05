import { useEffect, useRef, useState } from 'react'
import { Box, Button, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const HEADER_HEIGHT = 105

interface TagsBarProps {
  tags: string[]
  activeTag: string
  onTagClick: (tag: string) => void
}

export const TagsBar: React.FC<TagsBarProps> = ({
  tags,
  activeTag,
  onTagClick,
}) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = (): void => {
      setIsSticky(ref.current?.getBoundingClientRect().top === HEADER_HEIGHT)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <MotionBox
      ref={ref}
      pos='sticky'
      top='var(--chakra-sizes-header-height)'
      bg='white'
      px={{ base: '4', md: '8' }}
      zIndex='dropdown'
      borderColor='black'
      borderBottom='1px solid'
      overflowX='auto'
      initial={{ paddingTop: '4rem', paddingBottom: '1.5rem' }}
      animate={
        isSticky
          ? {
              paddingTop: '1rem',
              paddingBottom: '1rem',
              background: [
                'linear-gradient(90deg, #fad0c4 0%, #ffd1ff 100%)',
                'linear-gradient(90deg, #fdcbf1 0%, #e6dee9 100%)',
              ],
            }
          : {
              paddingTop: '4rem',
              paddingBottom: '1.5rem',
              background: 'white',
            }
      }
      transition={{
        background: {
          repeat: isSticky ? Infinity : 0,
          repeatType: 'reverse',
          duration: isSticky ? 2 : 0.5,
        },
      }}
    >
      <HStack spacing='4' w='min-content'>
        {tags.map((tag) => (
          <Button
            key={tag}
            aria-label={tag}
            variant='filter'
            onClick={() => onTagClick(tag)}
            isActive={tag === activeTag}
          >
            {tag}
          </Button>
        ))}
      </HStack>
    </MotionBox>
  )
}
