import { FC } from 'react'
import {
  chakra,
  Center,
  Icon,
  Tooltip,
  TooltipProps,
  useColorModeValue,
} from '@chakra-ui/react'
import type { TechnologyType } from 'types'

interface TechnologyProps extends TechnologyType {
  placement?: TooltipProps['placement']
}

const Technology: FC<TechnologyProps> = ({ name, icon, color, placement }) => (
  <Center
    padding='1'
    boxSize='16'
    bg={useColorModeValue('gray.100', 'gray.800')}
  >
    <Tooltip label={name} placement={placement}>
      <chakra.span>
        <Icon as={icon} boxSize='8' aria-label={name} color={color} />
      </chakra.span>
    </Tooltip>
  </Center>
)

export default Technology
