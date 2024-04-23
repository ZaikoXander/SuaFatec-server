import { City } from './city'
import { Course } from './course'
import { CourseOffering } from './courseOffering'
import { Institution } from './institution'

describe(CourseOffering, () => {
  const course = new Course(1, 'Ciência de Dados', 6, [])
  const city = new City(1, 'Praia Grande', [])
  const institution = new Institution(
    1,
    'Fatec de Praia Grande',
    'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
    city,
    [],
    [],
  )

  describe('#constructor', () =>
    it('instantiates', () =>
      expect(
        new CourseOffering(1, course, institution, ['night'], [], true),
      ).toBeInstanceOf(CourseOffering)))

  const courseOffering = new CourseOffering(
    1,
    course,
    institution,
    ['night'],
    [],
    true,
  )

  describe('#id', () =>
    it('returns id', () => expect(courseOffering.id).toBe(1)))

  describe('#course', () =>
    it('returns course', () => expect(courseOffering.course).toBe(course)))

  describe('#institution', () =>
    it('returns institution', () =>
      expect(courseOffering.institution).toBe(institution)))

  describe('#shifts', () =>
    it('returns shifts', () =>
      expect(courseOffering.shifts).toStrictEqual(['night'])))

  describe('#comments', () =>
    it('returns comments', () =>
      expect(courseOffering.comments).toStrictEqual([])))

  describe('#distanceLearning', () =>
    it('returns distanceLearning', () =>
      expect(courseOffering.distanceLearning).toBe(true)))
})
