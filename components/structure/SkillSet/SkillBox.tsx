import { Center, Flex, Icon, type IconProps, Tooltip } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

export interface Skill {
  name: string
  icon: IconType | ((props: IconProps) => JSX.Element)
  color: string
}

export interface SkillProps extends Skill {
  setBorderColor: (color: string) => void
}

export const SkillBox: React.FC<SkillProps> = ({
  name,
  icon,
  color,
  setBorderColor,
}) => (
  <Center
    padding='1'
    boxSize='16'
    bg='gray.100'
    onMouseEnter={() => setBorderColor(color)}
    onMouseLeave={() => setBorderColor('black')}
  >
    <Tooltip label={name} placement='bottom'>
      <Flex>
        <Icon as={icon} aria-label={name} boxSize='8' color={color} />
      </Flex>
    </Tooltip>
  </Center>
)
