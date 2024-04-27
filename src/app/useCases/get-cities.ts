import { Injectable } from '@nestjs/common'
import { CitiesRepository } from '../repositories/cities-repository'

import { City } from '../entities/city'

interface GetCitiesReponse {
  cities: City[]
}

@Injectable()
export class GetCities {
  constructor(private citiesRepository: CitiesRepository) {}

  async execute(): Promise<GetCitiesReponse> {
    const cities = await this.citiesRepository.findAll()

    return { cities }
  }
}
