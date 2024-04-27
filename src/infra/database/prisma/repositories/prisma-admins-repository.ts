import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaAdminMapper } from '../mappers/prisma-admin-mapper'

import { AdminsRepository } from '@app/repositories/admins-repository'
import { Admin } from '@app/entities/admin'

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
