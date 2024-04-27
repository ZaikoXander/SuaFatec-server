import { Module } from '@nestjs/common'

import { PrismaService } from './prisma/prisma.service'

import { InstitutionsRepository } from '../../app/repositories/institutions-repository'
import { CitiesRepository } from '../../app/repositories/cities-repository'

import { PrismaInstitutionsRepository } from './prisma/repositories/prisma-institutions-repository'
import { PrismaCitiesRepository } from './prisma/repositories/prisma-cities-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: InstitutionsRepository,
      useClass: PrismaInstitutionsRepository,
    },
    {
      provide: CitiesRepository,
      useClass: PrismaCitiesRepository,
    },
  ],
  exports: [InstitutionsRepository, CitiesRepository],
})
export class DatabaseModule {}
