import { CourseOffering } from '@app/entities/courseOffering'

export class CourseOfferingViewModel {
  static toHTTP(courseOffering: CourseOffering) {
    return {
      id: courseOffering.id,
      courseId: courseOffering.courseId,
      institutionId: courseOffering.institutionId,
      shifts: courseOffering.shifts,
      distanceLearning: courseOffering.distanceLearning,
    }
  }
}
