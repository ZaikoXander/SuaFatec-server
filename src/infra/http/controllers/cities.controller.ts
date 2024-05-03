import { Controller, Get } from '@nestjs/common'

import { GetCities } from '@app/useCases/get-cities'
import { CityViewModel } from '../viewModels/city-view-model'

@Controller('cities')
export class CitiesController {
  constructor(private getCities: GetCities) {}

  @Get()
  async index() {
    const { cities } = await this.getCities.execute()

    return { cities: cities.map(CityViewModel.toHTTP) }
  }
}
