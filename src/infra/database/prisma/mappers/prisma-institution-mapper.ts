import { Institution } from 'src/app/entities/institution'

import type { Institution as RawInstitution } from '@prisma/client'

export class PrismaInstitutionMapper {
  static toDomain(raw: RawInstitution): Institution {
    return new Institution(
      raw.id,
      raw.name,
      raw.address,
      raw.cityId,
      raw.latitudeCoordinate,
      raw.longitudeCoordinate,
    )
  }
}
