import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { InstitutionsController } from './controllers/institutions.controller'
import { GetInstitutions } from '../../app/useCases/get-institutions'

@Module({
  imports: [DatabaseModule],
  controllers: [InstitutionsController],
  providers: [GetInstitutions],
})
export class HttpModule {}
