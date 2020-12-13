import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { Header, Footer } from '../../components'
import { AppRoutes } from '../../AppRoutes'

export const AppContainer = () => {
  return (
    <Box>
      <Header />
      <Center>
        <AppRoutes />
      </Center>
      <Footer />
    </Box>
  )
}
