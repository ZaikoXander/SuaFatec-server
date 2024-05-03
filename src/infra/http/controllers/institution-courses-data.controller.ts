import { Controller, Get, Param } from '@nestjs/common'

import { GetInstitutionCoursesData } from '@app/useCases/get-institution-courses-data'

import { CourseViewModel } from '../viewModels/course-view-model'
import { CourseOfferingViewModel } from '../viewModels/courseOffering-view-model'

@Controller('institution-courses-data')
export class InstitutionCoursesDataController {
  constructor(private getInstitutionCoursesData: GetInstitutionCoursesData) {}

  @Get(':institutionId')
  async index(@Param('institutionId') institutionId: string) {
    const { courses, courseOfferings } =
      await this.getInstitutionCoursesData.execute({
        institutionId: Number(institutionId),
      })

    return {
      courses: courses.map(CourseViewModel.toHTTP),
      courseOfferings: courseOfferings.map(CourseOfferingViewModel.toHTTP),
    }
  }
}
