import { Institution } from '@app/entities/institution'

import { Institution as RawInstitution } from '@prisma/client'

export class PrismaInstitutionMapper {
  static toDomain(raw: RawInstitution): Institution {
    return new Institution(
      raw.id,
      raw.name,
      raw.address,
      raw.description,
      raw.phoneNumber,
      raw.cityId,
      raw.latitudeCoordinate,
      raw.longitudeCoordinate,
    )
  }
}
