export type Children =
    | (JSX.Element | undefined | null | boolean | string | number)[]
    | (JSX.Element | undefined | null | boolean | string | number)

export interface Student {
  firstName: string
  lastName: string
  middleName: string
  email: string
  phone: string
  address: string
  studentId: string
  birthDate: string
  id: string
}

export interface CourseNode {
  node: Course
}

export interface StudentNode {
  node: Student
}

export interface StudentEdges {
  edges: StudentNode[]
}

export interface Course {
  name: string
  code: string
  credit: number
  type: string
  id: string
  students: StudentEdges
}

export interface CoursesResponse {
  courses: {
    edges: CourseNode[]
  }
}

export interface CourseResponse {
  course: Course
}