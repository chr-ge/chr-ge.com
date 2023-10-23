import { chakra } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

export const MotionBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
})
