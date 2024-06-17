import { Photo } from '@app/entities/photo'

export class PhotoViewModel {
  static toHTTP(photo: Photo) {
    return {
      id: photo.id,
      url: photo.url,
      ...(photo.institutionId && { institutionId: photo.institutionId }),
    }
  }
}
