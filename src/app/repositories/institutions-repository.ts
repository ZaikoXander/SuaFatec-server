import type { Institution } from '../entities/institution'

export abstract class InstitutionsRepository {
  abstract findAll(): Promise<Institution[]>
}
