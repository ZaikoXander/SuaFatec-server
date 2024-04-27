import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'

import { InstitutionsController } from './controllers/institutions.controller'
import { CitiesController } from './controllers/cities.controller'

import { GetInstitutions } from '@app/useCases/get-institutions'
import { GetCities } from '@app/useCases/get-cities'

@Module({
  imports: [DatabaseModule],
  controllers: [InstitutionsController, CitiesController],
  providers: [GetInstitutions, GetCities],
})
export class HttpModule {}
