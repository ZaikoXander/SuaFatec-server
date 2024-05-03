import { Course } from '@app/entities/course'

export class CourseViewModel {
  static toHTTP(course: Course) {
    return {
      id: course.id,
      name: course.name,
      duration: course.duration,
    }
  }
}
