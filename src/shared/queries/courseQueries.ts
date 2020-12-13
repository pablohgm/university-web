import gql from 'graphql-tag'
import { course } from '../fragments/courseFragments'
import { student } from '../fragments/studentFragments'

export const LOAD_ALL_COURSES = gql`
  query loadAllCourses {
    courses {
      edges {
        node {
          ...course
        }
      }
    }
  }
  ${course}
`

export const LOAD_COURSE = gql`
  query loadCourse($courseId: ID!) {
    course: course(id: $courseId) {
      ...course
      students {
        edges {
          node {
            ...student
          }
        }
      }
    }
  }
  ${course}
  ${student}
`
