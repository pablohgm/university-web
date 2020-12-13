import React, { useEffect } from 'react'

import { ApolloError } from '@apollo/client'
import { Center, Image, useToast } from '@chakra-ui/react'

interface ErrorMessageProps {
  error?: ApolloError | Error
  message?: string
}

const parseGraphError = (error: ApolloError | Error) => {
  if ((error as ApolloError).networkError) {
    return new Error((error as ApolloError).networkError?.message)
  }
  const { graphQLErrors = [] } = error as ApolloError
  const [first] = graphQLErrors
  return new Error(first ? first.message : '')
}

const displayError = ({ toast, customError, message }: any) => {
  if (customError) {
    toast({
      title: message,
      description: customError.message,
      status: "error",
      duration: 9000,
      isClosable: true,
    })
  }
}

export const ErrorMessage = React.memo(({ error, message }: ErrorMessageProps) => {
  const toast = useToast()
  let customError: (ApolloError | undefined) | Error = error
  if (error && error.message && error.message.includes('Graph')) {
    customError = parseGraphError(error)
  }

  useEffect(() => {
    displayError({ toast, message, customError })
  }, [toast, message, customError])

  return (
    <Center padding={10}>
      <Image src="bug_icon.png" alt={message} />
    </Center>)
})
