import { Injectable } from '@nestjs/common'
import { CitiesRepository } from '../repositories/cities-repository'

import { City } from '../entities/city'

interface GetCitiesResponse {
  cities: City[]
}

@Injectable()
export class GetCities {
  constructor(private citiesRepository: CitiesRepository) {}

  async execute(): Promise<GetCitiesResponse> {
    const cities = await this.citiesRepository.findAll()

    return { cities }
  }
}
