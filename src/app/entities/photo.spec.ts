import { Photo } from './photo'

describe(Photo, () => {
  describe('#constructor', () => {
    describe('when is a institution photo', () =>
      it('instantiates', () =>
        expect(
          new Photo(1, 'https://www.fatecpg.edu.br/img/fatec.png', {
            institutionId: 1,
          }),
        ).toBeInstanceOf(Photo)))

    describe('when is a course photo', () =>
      it('instantiates', () =>
        expect(
          new Photo(1, 'https://www.fatecpg.edu.br/img/fatec.png', {
            courseId: 1,
          }),
        ).toBeInstanceOf(Photo)))
  })

  const institutionPhoto = new Photo(
    1,
    'https://www.fatecpg.edu.br/img/fatec.png',
    {
      institutionId: 1,
    },
  )
  const coursePhoto = new Photo(1, 'https://www.fatecpg.edu.br/img/fatec.png', {
    courseId: 1,
  })

  describe('#id', () =>
    it('returns id', () => expect(institutionPhoto.id).toBe(1)))

  describe('#url', () =>
    it('returns url', () =>
      expect(institutionPhoto.url).toBe(
        'https://www.fatecpg.edu.br/img/fatec.png',
      )))

  describe('#institutionId', () => {
    describe('when photo is from institution', () =>
      it('returns institution id', () =>
        expect(institutionPhoto.institutionId).toBe(1)))

    describe('when photo is from course', () =>
      it('returns undefined', () =>
        expect(coursePhoto.institutionId).toBe(undefined)))
  })

  describe('#courseId', () => {
    describe('when photo is from institution', () =>
      it('returns undefined', () =>
        expect(institutionPhoto.courseId).toBe(undefined)))

    describe('when photo is from course', () =>
      it('returns course id', () => expect(coursePhoto.courseId).toBe(1)))
  })
})
