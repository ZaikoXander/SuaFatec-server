import { Admin } from 'src/app/entities/admin'

import type { Admin as RawAdmin } from '@prisma/client'

export class PrismaAdminMapper {
  static toDomain(raw: RawAdmin): Admin {
    return new Admin(raw.id, raw.name, raw.password)
  }
}
