import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'

import { GetInstitutions } from '@app/useCases/get-institutions'
import { InstitutionViewModel } from '../viewModels/institution-view-model'

@Controller('institutions')
export class InstitutionsController {
  constructor(private getInstitutions: GetInstitutions) {}

  @Get()
  async index() {
    try {
      const { institutions } = await this.getInstitutions.execute()

      return { institutions: institutions.map(InstitutionViewModel.toHTTP) }
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
