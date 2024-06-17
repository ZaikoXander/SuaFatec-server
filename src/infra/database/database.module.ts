import { Module } from '@nestjs/common'

import { PrismaService } from './prisma/prisma.service'

import { InstitutionsRepository } from '@app/repositories/institutions-repository'
import { CitiesRepository } from '@app/repositories/cities-repository'
import { CourseOfferingsRepository } from '@app/repositories/courseOfferings-repository'
import { CoursesRepository } from '@app/repositories/courses-repository'
import { CommentsRepository } from '@app/repositories/comments-repository'
import { AdminsRepository } from '@app/repositories/admins-repository'
import { PhotosRepository } from '@app/repositories/photos-repository'

import { PrismaInstitutionsRepository } from './prisma/repositories/prisma-institutions-repository'
import { PrismaCitiesRepository } from './prisma/repositories/prisma-cities-repository'
import { PrismaCourseOfferingsRepository } from './prisma/repositories/prisma-courseOfferings-repository'
import { PrismaCoursesRepository } from './prisma/repositories/prisma-courses-repository'
import { PrismaCommentsRepository } from './prisma/repositories/prisma-comments-repository'
import { PrismaAdminsRepository } from './prisma/repositories/prisma-admins-repository'
import { PrismaPhotosRepository } from './prisma/repositories/prisma-photos-repository'

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
    {
      provide: AdminsRepository,
      useClass: PrismaAdminsRepository,
    },
    {
      provide: PhotosRepository,
      useClass: PrismaPhotosRepository,
    },
  ],
  exports: [
    InstitutionsRepository,
    CitiesRepository,
    CourseOfferingsRepository,
    CoursesRepository,
    CommentsRepository,
    AdminsRepository,
    PhotosRepository,
  ],
})
export class DatabaseModule {}
