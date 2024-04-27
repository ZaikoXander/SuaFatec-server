import { Injectable } from '@nestjs/common'
import { PrismaCityMapper } from '../mappers/prisma-city-mapper'

import type { CitiesRepository } from 'src/app/repositories/cities-repository'
import type { City } from 'src/app/entities/city'
import type { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaCitiesRepository implements CitiesRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<City[]> {
    const cities = await this.prisma.city.findMany()

    return cities.map(PrismaCityMapper.toDomain)
  }
}
