import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoadingSpinner } from './components'

const CourseContainerList = lazy(() => import('./views/courses/CourseListContainer'))
const CourseContainer = lazy(() => import('./views/courses/CourseDetailContainer'))

export const AppRoutes = () => (
  <Suspense fallback={<LoadingSpinner/>}>
    <Switch>
      <Route exact path="/" component={CourseContainerList} />
      <Route
        path="/course/:courseId"
        render={({
          match: {
            params: { courseId },
          },
        }) => <CourseContainer courseId={courseId} />}
      />
    </Switch>
  </Suspense>
)
