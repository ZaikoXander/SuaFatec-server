import { Module } from '@nestjs/common'

import { PrismaService } from './prisma/prisma.service'

import { InstitutionsRepository } from '../../app/repositories/institutions-repository'
import { PrismaInstitutionsRepository } from './prisma/repositories/prisma-institutions-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: InstitutionsRepository,
      useClass: PrismaInstitutionsRepository,
    },
  ],
  exports: [InstitutionsRepository],
})
export class DatabaseModule {}
