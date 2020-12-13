import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { useHistory } from 'react-router-dom'

const goHomeHandler = (history: any) => {
  history.push('/')
}

export const Header = React.memo(() => {
  const history = useHistory()

  return (
    <Flex
      direction="row"
      align="center"
      boxShadow="base"
      bgColor="gray.50"
      w="100%"
      h={55}
    >
      <ColorModeSwitcher justifySelf="flex-end" />
      <Text
        cursor="pointer"
        onClick={() => goHomeHandler(history) }
        fontSize="md"
        marginLeft={2}>University App Demo</Text>
    </Flex>
  )
})
