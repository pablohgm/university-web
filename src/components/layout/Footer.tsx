import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export const Footer = React.memo(() => {
  return (
    <Flex
      position="fixed"
      bottom={0}
      justify="center"
      align="center"
      bgColor="gray.50"
      display={['none', 'flex']}
      w="100%"
      h={10}
    >
      <Text color="gray.500" fontSize="xs">University Demo App</Text>
    </Flex>
  )
})
