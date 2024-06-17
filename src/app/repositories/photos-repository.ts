import { Photo } from '../entities/photo'

export abstract class PhotosRepository {
  abstract findByInstitutionId(institutionId: number): Promise<Photo[]>
  abstract findOneByCourseId(courseId: number): Promise<Photo>
}
