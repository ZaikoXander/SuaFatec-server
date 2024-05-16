import { Course } from './course'

describe(Course, () => {
  describe('#constructor', () =>
    it('instantiates', () =>
      expect(new Course(1, 'Ciência de Dados', 6, '...', 1)).toBeInstanceOf(
        Course,
      )))

  const course = new Course(1, 'Ciência de Dados', 6, '...', 1)

  describe('#id', () => it('returns id', () => expect(course.id).toBe(1)))

  describe('#name', () =>
    it('returns name', () => expect(course.name).toBe('Ciência de Dados')))

  describe('#duration', () =>
    it('returns duration', () => expect(course.duration).toBe(6)))

  describe('#description', () =>
    it('returns description', () => expect(course.description).toBe('...')))

  describe('#photoId', () =>
    it('returns photo id', () => expect(course.photoId).toBe(1)))
})
