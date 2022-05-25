import type { ReactNode } from 'react'
import { Box, type BoxProps, Flex, Container } from '@chakra-ui/react'
import { Footer, Header } from 'components/structure'

interface MainLayoutProps extends BoxProps {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => (
  <Container maxW='container.xl'>
    <Flex
      minH='100vh'
      direction='column'
      borderColor='black'
      borderLeft='1px solid'
      borderRight='1px solid'
    >
      <Header />
      <Box as='main' flex={1} {...props}>
        {children}
      </Box>
      <Footer />
    </Flex>
  </Container>
)
