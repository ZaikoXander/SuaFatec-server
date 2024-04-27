import { CourseOffering as RawCourseOffering } from '@prisma/client'
import { CourseOffering } from '@app/entities/courseOffering'

export class PrismaCourseOfferingMapper {
  static toDomain(raw: RawCourseOffering): CourseOffering {
    return new CourseOffering(
      raw.id,
      raw.courseId,
      raw.institutionId,
      raw.shifts,
      raw.distanceLearning,
    )
  }
}
