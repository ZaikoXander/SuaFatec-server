import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'

import { InstitutionsController } from './controllers/institutions.controller'
import { CitiesController } from './controllers/cities.controller'
import { InstitutionCoursesDataController } from './controllers/institution-courses-data.controller'
import { CommentsController } from './controllers/comments.controller'

import { GetInstitutions } from '@app/useCases/get-institutions'
import { GetCities } from '@app/useCases/get-cities'
import { GetInstitutionCoursesData } from '@app/useCases/get-institution-courses-data'
import { GetApprovedCourseOfferingComments } from '@app/useCases/get-approved-courseOffering-comments'
import { CreateComment } from '@app/useCases/create-comment'

@Module({
  imports: [DatabaseModule],
  controllers: [
    InstitutionsController,
    CitiesController,
    InstitutionCoursesDataController,
    CommentsController,
  ],
  providers: [
    GetInstitutions,
    GetCities,
    GetInstitutionCoursesData,
    GetApprovedCourseOfferingComments,
    CreateComment,
  ],
})
export class HttpModule {}
