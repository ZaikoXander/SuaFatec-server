import { Injectable } from '@nestjs/common'
import { PhotosRepository } from '@app/repositories/photos-repository'

@Injectable()
export class GetInstitutionPhotos {
  constructor(private photosRepository: PhotosRepository) {}

  async execute(institutionId: number) {
    const photos =
      await this.photosRepository.findByInstitutionId(institutionId)

    return { photos }
  }
}
