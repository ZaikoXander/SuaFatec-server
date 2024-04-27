import { City } from 'src/app/entities/city'

import type { City as RawCity } from '@prisma/client'

export class PrismaCityMapper {
  static toDomain(raw: RawCity): City {
    return new City(raw.id, raw.name)
  }
}
