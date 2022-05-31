import { useEffect, useRef, useState } from 'react'
import { Box, Button, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface TagsBarProps {
  tags: string[]
  onTagClick: (tag: string) => void
}

export const TagsBar: React.FC<TagsBarProps> = ({ tags, onTagClick }) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = (): void => {
      setIsSticky(ref.current?.getBoundingClientRect().top === 105)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <MotionBox
      ref={ref}
      pos='sticky'
      top='105px'
      bg='white'
      px={{ base: '4', md: '8' }}
      zIndex='sticky'
      borderColor='black'
      borderBottom='1px solid'
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
      overflowX='auto'
    >
      <HStack spacing='4' w='min-content'>
        {tags.map((tag) => (
          <Button
            key={tag}
            aria-label={tag}
            variant='block'
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </Button>
        ))}
      </HStack>
    </MotionBox>
  )
}
