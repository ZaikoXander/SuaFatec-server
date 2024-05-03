import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'

import { InstitutionsController } from './controllers/institutions.controller'
import { CitiesController } from './controllers/cities.controller'
import { InstitutionCoursesDataController } from './controllers/institution-courses-data.controller'

import { GetInstitutions } from '@app/useCases/get-institutions'
import { GetCities } from '@app/useCases/get-cities'
import { GetInstitutionCoursesData } from '@app/useCases/get-institution-courses-data'

@Module({
  imports: [DatabaseModule],
  controllers: [
    InstitutionsController,
    CitiesController,
    InstitutionCoursesDataController,
  ],
  providers: [GetInstitutions, GetCities, GetInstitutionCoursesData],
})
export class HttpModule {}
