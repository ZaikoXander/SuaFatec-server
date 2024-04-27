import { Controller, Get } from '@nestjs/common'
import { GetCities } from 'src/app/useCases/get-cities'
import { CitieViewModel } from '../viewModels/cities-view-model'

@Controller('cities')
export class CitiesController {
  constructor(private getCities: GetCities) {}

  @Get()
  async index() {
    const { cities } = await this.getCities.execute()

    return { cities: cities.map(CitieViewModel.toHTTP) }
  }
}
