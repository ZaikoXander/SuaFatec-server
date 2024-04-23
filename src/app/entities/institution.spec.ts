import { City } from './city'
import { Institution } from './institution'

describe(Institution, () => {
  const city = new City(1, 'Praia Grande', [])

  describe('#constructor', () =>
    it('instantiates', () =>
      expect(
        new Institution(
          1,
          'Fatec de Praia Grande',
          'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
          city,
          [],
          [],
        ),
      ).toBeInstanceOf(Institution)))

  const institution = new Institution(
    1,
    'Fatec de Praia Grande',
    'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
    city,
    [],
    [],
  )

  describe('#id', () => it('returns id', () => expect(institution.id).toBe(1)))

  describe('#name', () =>
    it('returns name', () =>
      expect(institution.name).toBe('Fatec de Praia Grande')))

  describe('#address', () =>
    it('returns address', () =>
      expect(institution.address).toBe(
        'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
      )))

  describe('#city', () =>
    it('returns city', () => expect(institution.city).toBe(city)))

  describe('#photoUrls', () =>
    it('returns photos', () => expect(institution.photos).toStrictEqual([])))

  describe('#courseOfferings', () =>
    it('returns courseOfferings', () =>
      expect(institution.courseOfferings).toStrictEqual([])))
})
