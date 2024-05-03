import { City } from '@app/entities/city'

export class CityViewModel {
  static toHTTP(city: City) {
    return {
      id: city.id,
      name: city.name,
    }
  }
}
