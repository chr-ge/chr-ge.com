import { FC } from 'react'
import { chakra, Center, Icon, Tooltip } from '@chakra-ui/react'
import type { TechnologyType } from 'types'

const Technology: FC<TechnologyType> = ({ name, icon, color }) => (
  <Center padding='1' boxSize='16' bg='gray.100'>
    <Tooltip label={name}>
      <chakra.span>
        <Icon as={icon} boxSize='8' aria-label={name} color={color} />
      </chakra.span>
    </Tooltip>
  </Center>
)

export default Technology
