import { Injectable } from '@nestjs/common'
import { PhotosRepository } from '@app/repositories/photos-repository'

@Injectable()
export class GetCoursePhoto {
  constructor(private photosRepository: PhotosRepository) {}

  async execute(courseId: number) {
    const photo = await this.photosRepository.findOneByCourseId(courseId)

    return { photo }
  }
}
