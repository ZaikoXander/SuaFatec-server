import { Institution } from '@app/entities/institution'

export class InstitutionViewModel {
  static toHTTP(institution: Institution) {
    return {
      id: institution.id,
      name: institution.name,
      address: institution.address,
      description: institution.description,
      phoneNumber: institution.phoneNumber,
      cityId: institution.cityId,
      latitudeCoordinate: institution.latitudeCoordinate,
      longitudeCoordinate: institution.longitudeCoordinate,
    }
  }
}
