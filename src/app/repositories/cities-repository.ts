import type { City } from '../entities/city'

export abstract class CitiesRepository {
  abstract findAll(): Promise<City[]>
}
