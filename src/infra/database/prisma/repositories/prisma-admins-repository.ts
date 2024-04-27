import { Injectable } from '@nestjs/common'
import { PrismaAdminMapper } from '../mappers/prisma-admin-mapper'

import type { AdminsRepository } from 'src/app/repositories/admins-repository'
import type { PrismaService } from '../prisma.service'
import type { Admin } from 'src/app/entities/admin'

@Injectable()
export class PrismaAdminsRepository implements AdminsRepository {
  constructor(private prisma: PrismaService) {}
  async find(admin: Admin): Promise<Admin | null> {
    const foundAdmin = await this.prisma.admin.findFirst({
      where: { id: admin.id, name: admin.name, password: admin.password },
    })

    if (!foundAdmin) return null

    return PrismaAdminMapper.toDomain(foundAdmin)
  }
}
