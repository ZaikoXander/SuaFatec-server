import { City } from './city'

describe(City, () => {
  describe('#constructor', () =>
    it('instantiates', () =>
      expect(new City(1, 'Praia Grande')).toBeInstanceOf(City)))

  const city = new City(1, 'Praia Grande')

  describe('#id', () => it('returns id', () => expect(city.id).toBe(1)))

  describe('#name', () =>
    it('returns name', () => expect(city.name).toBe('Praia Grande')))
})
