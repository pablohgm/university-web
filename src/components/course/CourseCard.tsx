import React from 'react'
import { Container, Text} from '@chakra-ui/react'

interface CourseCardProps {
  name: string
  type: string
  code: string
  credit: number
}

export const CourseCard = React.memo(({ name, type, code, credit }: CourseCardProps) => {
  return (
    <Container
      borderWidth={1}
      borderRadius="lg"
      marginTop={10}
      width={['90vw', '100%']}
      padding={4}
      textAlign="center"
    >
      <Text fontSize="2xl">{ name }</Text>
      <Text fontSize="xs" color="gray.400" as="cite">{ type }</Text>
      <Text fontSize="sm" color="gray.500" marginTop={2}>Code: { code } - Credits: { credit }</Text>
    </Container>
  )
})
