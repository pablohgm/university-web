import React from 'react'
import { LOAD_ALL_COURSES } from '../../shared'
import { CoursesResponse } from '../../types/index'
import { CourseTable, QueryResponseWrapper } from '../../components'
import { useQuery } from '@apollo/client'

const getCourses = (data?: CoursesResponse) => {
  return data?.courses?.edges || []
}

const goCourseHandler = (courseId: string, history: any) => {
  history.push(`/course/${courseId}`)
}

export default React.memo(() => {
  const { data, error, loading } = useQuery<CoursesResponse>(LOAD_ALL_COURSES)
  const courses = getCourses(data)
  return (
  <QueryResponseWrapper loading={loading} error={error}>
    <CourseTable onClickHandler={goCourseHandler} courses={courses}/>
  </QueryResponseWrapper>
)})
