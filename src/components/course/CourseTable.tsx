import React from 'react'
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { CourseNode } from '../../types'
import {useHistory} from "react-router-dom";

interface CourseTableProps {
  courses: CourseNode[]
  onClickHandler: (courseId: string, history: any) => void
}

export const CourseTable = React.memo(({ courses, onClickHandler }: CourseTableProps) => {
  const history = useHistory()

  return (
    <Table colorScheme="teal">
      <TableCaption placement="top">Courses</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Code</Th>
          <Th>Type</Th>
          <Th isNumeric>Credits</Th>
        </Tr>
      </Thead>
      <Tbody>
        { courses?.map(({ node:
          { name,
            credit,
            code,
            type ,
            id}}) => (
          <Tr
            key={id}
            _hover={{ bg: "teal.200" }}
            cursor="pointer"
            onClick={ () => onClickHandler(id, history) }
          >
            <Td data-title='Name'>{ name }</Td>
            <Td data-title='Code'>{ code }</Td>
            <Td data-title='Type'>{ type }</Td>
            <Td  data-title='Credits' isNumeric>{ credit }</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
})
