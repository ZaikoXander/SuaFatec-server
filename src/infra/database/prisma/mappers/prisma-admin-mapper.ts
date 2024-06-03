import { Admin } from '@app/entities/admin'

import { Admin as RawAdmin } from '@prisma/client'

export class PrismaAdminMapper {
  static toDomain(raw: RawAdmin): Admin {
    return new Admin(raw.name, raw.password, raw.id)
  }
}
