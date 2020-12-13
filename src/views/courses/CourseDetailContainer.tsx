import React from 'react'
import { LOAD_COURSE } from '../../shared'
import { CourseResponse } from '../../types/index'
import { CourseCard, QueryResponseWrapper, StudentTable } from '../../components'
import { useQuery } from '@apollo/client'

interface CourseContainerProps {
  courseId: string
}

export default React.memo((({ courseId }: CourseContainerProps) => {
  const { data, error, loading } = useQuery<CourseResponse>(LOAD_COURSE, {
    variables: {
      courseId
    }
  })
  const course = data?.course
  return (
    <QueryResponseWrapper loading={loading} error={error}>
      { course && <CourseCard {...course} /> }
      { course && <StudentTable students={course.students}/> }
    </QueryResponseWrapper>
  )
}))
