import { Module } from '@nestjs/common'

import { PrismaService } from './prisma/prisma.service'

import { InstitutionsRepository } from '@app/repositories/institutions-repository'
import { CitiesRepository } from '@app/repositories/cities-repository'
import { CourseOfferingsRepository } from '@app/repositories/courseOfferings-repository'
import { CoursesRepository } from '@app/repositories/courses-repository'

import { PrismaInstitutionsRepository } from './prisma/repositories/prisma-institutions-repository'
import { PrismaCitiesRepository } from './prisma/repositories/prisma-cities-repository'
import { PrismaCourseOfferingsRepository } from './prisma/repositories/prisma-courseOfferings-repository'
import { PrismaCoursesRepository } from './prisma/repositories/prisma-courses-repository'

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
    {
      provide: CourseOfferingsRepository,
      useClass: PrismaCourseOfferingsRepository,
    },
    {
      provide: CoursesRepository,
      useClass: PrismaCoursesRepository,
    },
  ],
  exports: [
    InstitutionsRepository,
    CitiesRepository,
    CourseOfferingsRepository,
    CoursesRepository,
  ],
})
export class DatabaseModule {}
