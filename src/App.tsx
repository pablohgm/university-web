import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { AppTheme } from './theme'

import { Children } from './types'
import { apolloClient } from './shared'

interface AppProvidersProps {
  children: Children
}

export const App = ({ children }: AppProvidersProps) => {
  return (
    <ApolloProvider client={apolloClient()}>
      <BrowserRouter>
        <ChakraProvider theme={AppTheme}>{children}</ChakraProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}
