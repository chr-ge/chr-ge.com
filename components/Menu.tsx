import { FC } from 'react'
import { useRouter } from 'next/router'
import { Button, Portal, SimpleGrid } from '@chakra-ui/react'

const Menu: FC = () => {
  const router = useRouter()

  return (
    <Portal>
      <SimpleGrid
        position='absolute'
        right={0}
        bottom={0}
        margin='4'
        padding='4'
        bg='white'
        boxShadow='lg'
        borderRadius='lg'
        gap='2'
      >
        <Button paddingY='10'>Home</Button>
        <Button paddingY='10'>Contact</Button>
      </SimpleGrid>
    </Portal>
  )
}

export default Menu
