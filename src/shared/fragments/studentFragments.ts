import gql from 'graphql-tag'

export const student = gql`
  fragment student on StudentNode {
    id
    firstName
    middleName
    lastName
    email
    phone
    address
    studentId
    birthDate
  }
`