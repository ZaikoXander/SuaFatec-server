import { City } from '@app/entities/city'

export class CitiesViewModel {
  static toHTTP(city: City) {
    return {
      id: city.id,
      name: city.name,
    }
  }
}
