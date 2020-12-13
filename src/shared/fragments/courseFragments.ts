import gql from 'graphql-tag'

export const course = gql`
  fragment course on CourseNode {
    id
    name
    code
    type
    credit
  }
`