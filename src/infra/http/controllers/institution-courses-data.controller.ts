import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common'

import { GetInstitutionCoursesData } from '@app/useCases/get-institution-courses-data'

import { CourseViewModel } from '../viewModels/course-view-model'
import { CourseOfferingViewModel } from '../viewModels/courseOffering-view-model'

@Controller('institution-courses-data')
export class InstitutionCoursesDataController {
  constructor(private getInstitutionCoursesData: GetInstitutionCoursesData) {}

  @Get(':institutionId')
  async index(@Param('institutionId') institutionId: string) {
    try {
      const { courses, courseOfferings } =
        await this.getInstitutionCoursesData.execute({
          institutionId: Number(institutionId),
        })

      return {
        courses: courses.map(CourseViewModel.toHTTP),
        courseOfferings: courseOfferings.map(CourseOfferingViewModel.toHTTP),
      }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      )
    }
  }
}
