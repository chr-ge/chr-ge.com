import { FC, ReactNode } from 'react'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Footer, Header } from 'components'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const gradient = useColorModeValue(
    'linear(to-t, primary.500, secondary.500)',
    'linear(to-t, #16222a, #3a6073)'
  )

  return (
    <Flex as='main' minH='100vh' padding='4' direction='column'>
      <Box flex={1} bgGradient={gradient} borderRadius='lg' padding='4'>
        <Header />
        <Box marginY='2'>{children}</Box>
      </Box>
      <Footer />
    </Flex>
  )
}

export default MainLayout
