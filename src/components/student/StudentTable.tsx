import React from 'react'
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { StudentEdges } from '../../types'

interface StudentTableProps {
  students: StudentEdges
}

export const StudentTable = React.memo(({ students }: StudentTableProps) => {
  return (
    <Table colorScheme="teal" size="sm">
      <TableCaption placement="top">Enrolled students</TableCaption>
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Middle Name</Th>
          <Th>Last Name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>BirthDate</Th>
          <Th>Address</Th>
          <Th isNumeric>Student ID</Th>
        </Tr>
      </Thead>
      <Tbody>
        { students.edges.map(({ node:
          { firstName,
            middleName,
            lastName,
            email,
            phone,
            address,
            studentId,
            birthDate,
            id
          }}) => (
          <Tr key={id}>
            <Td data-title='First Name'>{ firstName }</Td>
            <Td data-title='Middle Name'>{ middleName }</Td>
            <Td data-title='Last Name'>{ lastName }</Td>
            <Td data-title='Email'>{ email }</Td>
            <Td data-title='Phone'>{ phone }</Td>
            <Td data-title='BirthDate'>{ birthDate }</Td>
            <Td data-title='Address'>{ address }</Td>
            <Td data-title='Student ID' isNumeric>{ studentId }</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
})
