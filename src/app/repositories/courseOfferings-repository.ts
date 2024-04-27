import { CourseOffering } from '../entities/courseOffering'

export abstract class CourseOfferingsRepository {
  abstract findManyByInstitutionId(
    institutionId: number,
  ): Promise<CourseOffering[]>
}
