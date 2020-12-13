import React from 'react'
import { ApolloError } from '@apollo/client'

import { Box } from '@chakra-ui/react'

import { Children } from '../types'

import { ErrorMessage } from './ErrorMessage'
import { LoadingSpinner } from './layout/LoadingSpinner'

interface QueryResponseWrapperProps {
  children: Children
  loading?: boolean
  error?: ApolloError
}

export const QueryResponseWrapper = React.memo(({
  children,
  loading = false,
  error,
}: QueryResponseWrapperProps) => {
  if (loading) {
    return <LoadingSpinner/>
  }
  if (error) {
    return <ErrorMessage error={error} message="An unexpected error has occurred" />
  }
  return <Box>{children}</Box>
})
