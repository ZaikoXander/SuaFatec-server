import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { DatabaseModule } from '../database/database.module'

import { InstitutionsController } from './controllers/institutions.controller'
import { CitiesController } from './controllers/cities.controller'
import { InstitutionCoursesDataController } from './controllers/institution-courses-data.controller'
import { CommentsController } from './controllers/comments.controller'
import { AdminsController } from './controllers/admins.controller'
import { PhotosController } from './controllers/photos.controller'

import { GetInstitutions } from '@app/useCases/get-institutions'
import { GetCities } from '@app/useCases/get-cities'
import { GetInstitutionCoursesData } from '@app/useCases/get-institution-courses-data'

import { GetApprovedCourseOfferingComments } from '@app/useCases/get-approved-courseOffering-comments'
import { CreateComment } from '@app/useCases/create-comment'
import { LikeComment } from '@app/useCases/like-comment'
import { DislikeComment } from '@app/useCases/dislike-comment'
import { ApproveComment } from '@app/useCases/approve-comment'
import { DeleteComment } from '@app/useCases/delete-comment'
import { GetNotApprovedComments } from '@app/useCases/get-not-approved-comments'

import { AuthenticateAdmin } from '@app/useCases/authenticate-admin'

import { GetInstitutionPhotos } from '@app/useCases/get-institution-photos'
import { GetCoursePhoto } from '@app/useCases/get-course-photos'

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [
    InstitutionsController,
    CitiesController,
    InstitutionCoursesDataController,
    CommentsController,
    AdminsController,
    PhotosController,
  ],
  providers: [
    GetInstitutions,
    GetCities,
    GetInstitutionCoursesData,
    GetApprovedCourseOfferingComments,
    CreateComment,
    LikeComment,
    DislikeComment,
    ApproveComment,
    DeleteComment,
    GetNotApprovedComments,
    AuthenticateAdmin,
    GetInstitutionPhotos,
    GetCoursePhoto,
  ],
})
export class HttpModule {}
