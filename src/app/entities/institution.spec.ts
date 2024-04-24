import { Institution } from './institution'

describe(Institution, () => {
  describe('#constructor', () =>
    it('instantiates', () =>
      expect(
        new Institution(
          1,
          'Fatec de Praia Grande',
          'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
          1,
        ),
      ).toBeInstanceOf(Institution)))

  const institution = new Institution(
    1,
    'Fatec de Praia Grande',
    'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
    1,
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

  describe('#cityId', () =>
    it('returns city id', () => expect(institution.cityId).toBe(1)))
})
