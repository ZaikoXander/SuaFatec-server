import { Course as RawCourse } from '@prisma/client'
import { Course } from '@app/entities/course'

export class PrismaCourseMapper {
  static toDomain(raw: RawCourse): Course {
    return new Course(raw.id, raw.name, raw.duration)
  }
}
