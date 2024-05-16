import { Photo } from './photo'

describe(Photo, () => {
  describe('#constructor', () => {
    describe('when is a institution photo', () =>
      it('instantiates', () =>
        expect(
          new Photo(1, 'https://www.fatecpg.edu.br/img/fatec.png', 1),
        ).toBeInstanceOf(Photo)))

    describe('when is a course photo', () =>
      it('instantiates', () =>
        expect(
          new Photo(1, 'https://www.fatecpg.edu.br/img/fatec.png', 1),
        ).toBeInstanceOf(Photo)))
  })

  const institutionPhoto = new Photo(
    1,
    'https://www.fatecpg.edu.br/img/fatec.png',
    1,
  )

  describe('#id', () =>
    it('returns id', () => expect(institutionPhoto.id).toBe(1)))

  describe('#url', () =>
    it('returns url', () =>
      expect(institutionPhoto.url).toBe(
        'https://www.fatecpg.edu.br/img/fatec.png',
      )))

  describe('#institutionId', () => {
    it('returns institution id', () =>
      expect(institutionPhoto.institutionId).toBe(1))
  })
})
