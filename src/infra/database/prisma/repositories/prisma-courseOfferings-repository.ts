import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CourseOfferingsRepository } from '@app/repositories/courseOfferings-repository'
import { CourseOffering } from '@app/entities/courseOffering'
import { PrismaCourseOfferingMapper } from '../mappers/prisma-courseOffering-mapper'

@Injectable()
export class PrismaCourseOfferingsRepository
  implements CourseOfferingsRepository
{
  constructor(private prisma: PrismaService) {}

  async findManyByInstitutionId(
    institutionId: number,
  ): Promise<CourseOffering[]> {
    const courseOfferings = await this.prisma.courseOffering.findMany({
      where: { institutionId: institutionId },
    })

    return courseOfferings.map(PrismaCourseOfferingMapper.toDomain)
  }
}
