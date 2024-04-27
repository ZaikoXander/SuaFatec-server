import { Course } from '@app/entities/course'

export abstract class CoursesRepository {
  abstract findManyByCourseIds(courseIds: number[]): Promise<Course[]>
}
