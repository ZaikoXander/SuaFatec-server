import { Injectable } from '@nestjs/common'
import { PrismaInstitutionMapper } from '../mappers/prisma-institution-mapper'

import type { InstitutionsRepository } from 'src/app/repositories/institutions-repository'
import type { Institution } from 'src/app/entities/institution'
import type { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaInstitutionsRepository implements InstitutionsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Institution[]> {
    const institutions = await this.prisma.institution.findMany()

    return institutions.map(PrismaInstitutionMapper.toDomain)
  }
}
