import { FC, ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Footer } from 'components'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <Flex as='main' minH='100vh' padding='4' direction='column'>
    <Box flex={1}>{children}</Box>
    <Footer />
  </Flex>
)

export default MainLayout
