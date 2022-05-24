import { Center, Flex, Icon, type IconProps, Tooltip } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

export interface SkillProps {
  name: string
  icon: IconType | ((props: IconProps) => JSX.Element)
  color?: string
}

export const Skill: React.FC<SkillProps> = ({ name, icon, color }) => (
  <Center padding='1' boxSize='16' bg='gray.100'>
    <Tooltip label={name} placement='bottom'>
      <Flex>
        <Icon as={icon} boxSize='8' aria-label={name} color={color} />
      </Flex>
    </Tooltip>
  </Center>
)
