import { Injectable } from '@nestjs/common'
import { InstitutionsRepository } from '../repositories/institutions-repository'

import type { Institution } from '../entities/institution'

interface GetInstitutionsResponse {
  institutions: Institution[]
}

@Injectable()
export class GetInstitutions {
  constructor(private institutionsRepository: InstitutionsRepository) {}

  async execute(): Promise<GetInstitutionsResponse> {
    const institutions = await this.institutionsRepository.findAll()

    return { institutions }
  }
}
