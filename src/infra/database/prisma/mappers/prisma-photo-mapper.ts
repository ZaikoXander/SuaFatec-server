import { Photo as RawPhoto } from '@prisma/client'
import { Photo } from '@app/entities/photo'

export class PrismaPhotoMapper {
  static toDomain(raw: RawPhoto): Photo {
    return new Photo(raw.id, raw.url, raw.institutionId)
  }
}
