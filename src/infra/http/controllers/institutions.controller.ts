import { Controller, Get } from '@nestjs/common'

import { GetInstitutions } from '@app/useCases/get-institutions'
import { InstitutionViewModel } from '../viewModels/institution-view-model'

@Controller('institutions')
export class InstitutionsController {
  constructor(private getInstitutions: GetInstitutions) {}

  @Get()
  async index() {
    const { institutions } = await this.getInstitutions.execute()

    return { institutions: institutions.map(InstitutionViewModel.toHTTP) }
  }
}
