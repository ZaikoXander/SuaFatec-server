import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'

import { GetCities } from '@app/useCases/get-cities'
import { CityViewModel } from '../viewModels/city-view-model'

@Controller('cities')
export class CitiesController {
  constructor(private getCities: GetCities) {}

  @Get()
  async index() {
    try {
      const { cities } = await this.getCities.execute()

      return { cities: cities.map(CityViewModel.toHTTP) }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      )
    }
  }
}
