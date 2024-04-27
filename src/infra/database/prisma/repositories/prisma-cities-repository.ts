import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaCityMapper } from '../mappers/prisma-city-mapper'

import type { CitiesRepository } from '../../../../app/repositories/cities-repository'
import type { City } from '../../../../app/entities/city'

@Injectable()
export class PrismaCitiesRepository implements CitiesRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<City[]> {
    const cities = await this.prisma.city.findMany()

    return cities.map(PrismaCityMapper.toDomain)
  }
}
