import { ReactNode } from 'react'
import { Box, type BoxProps, Flex } from '@chakra-ui/react'
import { Footer } from 'components'

interface MainLayoutProps extends BoxProps {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => (
  <Flex as='main' minH='100vh' padding='4' direction='column'>
    <Box flex={1} {...props}>
      {children}
    </Box>
    <Footer />
  </Flex>
)
