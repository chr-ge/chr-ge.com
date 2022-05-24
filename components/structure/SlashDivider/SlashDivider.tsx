import { Box } from '@chakra-ui/react'

export const SlashDivider: React.FC = () => (
  <Box
    h='12'
    borderColor='black'
    borderTop='1px solid'
    borderBottom='1px solid'
    bg='white'
    style={{
      backgroundImage:
        'repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(0, 0, 0, 1) 24px, rgba(0, 0, 0, 1) 25px)',
    }}
  />
)
