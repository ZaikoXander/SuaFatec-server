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
import { CommentsRepository } from '@app/repositories/comments-repository'
import { PrismaCommentsRepository } from './prisma/repositories/prisma-comments-repository'

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
    {
      provide: CommentsRepository,
      useClass: PrismaCommentsRepository,
    },
  ],
  exports: [
    InstitutionsRepository,
    CitiesRepository,
    CourseOfferingsRepository,
    CoursesRepository,
    CommentsRepository,
  ],
})
export class DatabaseModule {}
