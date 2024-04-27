import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaInstitutionMapper } from '../mappers/prisma-institution-mapper'

import type { InstitutionsRepository } from '../../../../app/repositories/institutions-repository'
import type { Institution } from '../../../../app/entities/institution'

@Injectable()
export class PrismaInstitutionsRepository implements InstitutionsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Institution[]> {
    const institutions = await this.prisma.institution.findMany()

    return institutions.map(PrismaInstitutionMapper.toDomain)
  }
}
