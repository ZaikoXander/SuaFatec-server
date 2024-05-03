import { Injectable } from '@nestjs/common'

import { Course } from '@app/entities/course'
import { CourseOffering } from '@app/entities/courseOffering'

import { CourseOfferingsRepository } from '@app/repositories/courseOfferings-repository'
import { CoursesRepository } from '@app/repositories/courses-repository'

interface GetInstitutionCoursesDataRequest {
  institutionId: number
}

interface GetInstitutionCoursesDataResponse {
  courses: Course[]
  courseOfferings: CourseOffering[]
}

@Injectable()
export class GetInstitutionCoursesData {
  constructor(
    private courseOfferingsRepository: CourseOfferingsRepository,
    private coursesRepository: CoursesRepository,
  ) {}

  async execute({
    institutionId,
  }: GetInstitutionCoursesDataRequest): Promise<GetInstitutionCoursesDataResponse> {
    const courseOfferings =
      await this.courseOfferingsRepository.findManyByInstitutionId(
        institutionId,
      )

    const coursesIds = courseOfferings.map(
      (courseOffering) => courseOffering.courseId,
    )

    const courses = await this.coursesRepository.findManyByCourseIds(coursesIds)

    return { courses, courseOfferings }
  }
}
