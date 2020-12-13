import React from 'react'
import { Center, Spinner} from '@chakra-ui/react'

export const LoadingSpinner = React.memo(() => (
  <Center height="70vh"> <Spinner /> </Center>
))
