import { Photo } from './photo'

describe(Photo, () => {
  describe('#constructor', () =>
    it('instantiates', () =>
      expect(
        new Photo(1, 'https://www.fatecpg.edu.br/img/fatec.png', 1),
      ).toBeInstanceOf(Photo)))

  const photo = new Photo(1, 'https://www.fatecpg.edu.br/img/fatec.png', 1)

  describe('#id', () => it('returns id', () => expect(photo.id).toBe(1)))

  describe('#url', () =>
    it('returns url', () =>
      expect(photo.url).toBe('https://www.fatecpg.edu.br/img/fatec.png')))

  describe('#institutionId', () =>
    it('returns institution id', () => expect(photo.institutionId).toBe(1)))
})
