import { Controller, Get } from '@nestjs/common'

import { GetCities } from '@app/useCases/get-cities'
import { CitiesViewModel } from '../viewModels/cities-view-model'

@Controller('cities')
export class CitiesController {
  constructor(private getCities: GetCities) {}

  @Get()
  async index() {
    const { cities } = await this.getCities.execute()

    return { cities: cities.map(CitiesViewModel.toHTTP) }
  }
}
