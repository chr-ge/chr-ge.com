import { FC, ReactNode } from 'react'
import { Box, BoxProps, Flex } from '@chakra-ui/react'
import { Footer } from 'components'

interface MainLayoutProps extends BoxProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children, ...props }) => (
  <Flex as='main' minH='100vh' padding='4' direction='column'>
    <Box flex={1} {...props}>
      {children}
    </Box>
    <Footer />
  </Flex>
)

export default MainLayout
