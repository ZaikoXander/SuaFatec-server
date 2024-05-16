import { Institution } from './institution'

describe(Institution, () => {
  describe('#constructor', () => {
    describe('when institution description has 2 paragraphs', () =>
      it('instantiates', () =>
        expect(
          new Institution(
            1,
            'Fatec de Praia Grande',
            'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
            ['...', '...'],
            '(13) 3227-6003',
            1,
            0,
            0,
          ),
        ).toBeInstanceOf(Institution)))

    describe('when institution description has not 2 paragraphs', () =>
      it('throws an error', () =>
        expect(
          () =>
            new Institution(
              1,
              'Fatec de Praia Grande',
              'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
              ['...'],
              '(13) 3227-6003',
              1,
              0,
              0,
            ),
        ).toThrow('Description must have 2 paragraphs')))
  })

  const institution = new Institution(
    1,
    'Fatec de Praia Grande',
    'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
    ['...', '...'],
    '(13) 3227-6003',
    1,
    0,
    0,
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

  describe('#description', () =>
    it('returns description', () =>
      expect(institution.description).toStrictEqual(['...', '...'])))

  describe('#phoneNumber', () =>
    it('returns phone number', () =>
      expect(institution.phoneNumber).toBe('(13) 3227-6003')))

  describe('#cityId', () =>
    it('returns city id', () => expect(institution.cityId).toBe(1)))

  describe('#latitudeCoordinate', () =>
    it('returns latitude coordinate', () =>
      expect(institution.latitudeCoordinate).toBe(0)))

  describe('#longitudeCoordinate', () =>
    it('returns longitude coordinate', () =>
      expect(institution.longitudeCoordinate).toBe(0)))
})
