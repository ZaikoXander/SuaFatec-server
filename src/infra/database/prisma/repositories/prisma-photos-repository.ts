import { Injectable } from '@nestjs/common'
import { PhotosRepository } from '@app/repositories/photos-repository'
import { PrismaService } from '../prisma.service'
import { PrismaPhotoMapper } from '../mappers/prisma-photo-mapper'
import { Photo } from '@app/entities/photo'

@Injectable()
export class PrismaPhotosRepository implements PhotosRepository {
  constructor(private prisma: PrismaService) {}

  async findByInstitutionId(institutionId: number): Promise<Photo[]> {
    const photos = await this.prisma.photo.findMany({
      where: {
        institutionId,
      },
    })

    return photos.map(PrismaPhotoMapper.toDomain)
  }

  async findOneByCourseId(courseId: number): Promise<Photo> {
    const { photoId } = await this.prisma.course.findUnique({
      where: {
        id: courseId,
      },
      select: {
        photoId: true,
      },
    })

    const photo = await this.prisma.photo.findUnique({
      where: {
        id: photoId,
      },
    })

    return PrismaPhotoMapper.toDomain(photo)
  }
}
