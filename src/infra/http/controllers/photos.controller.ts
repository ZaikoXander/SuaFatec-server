import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common'
import { GetInstitutionPhotos } from '@app/useCases/get-institution-photos'
import { PhotoViewModel } from '../viewModels/photo-view-model'
import { GetCoursePhoto } from '@app/useCases/get-course-photos'

@Controller('photos')
export class PhotosController {
  constructor(
    private getInstitutionPhotos: GetInstitutionPhotos,
    private getCoursePhotos: GetCoursePhoto,
  ) {}

  @Get('institution/:id')
  async institutionPhotos(@Param('id') institutionId: string) {
    try {
      const { photos } = await this.getInstitutionPhotos.execute(
        Number(institutionId),
      )

      return { photos: photos.map(PhotoViewModel.toHTTP) }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      )
    }
  }

  @Get('course/:id')
  async coursePhotos(@Param('id') courseId: string) {
    try {
      const { photo } = await this.getCoursePhotos.execute(Number(courseId))

      return { photo: PhotoViewModel.toHTTP(photo) }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      )
    }
  }
}
