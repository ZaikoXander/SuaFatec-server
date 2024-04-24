import { CourseOffering } from './courseOffering'

describe(CourseOffering, () => {
  describe('#constructor', () =>
    it('instantiates', () =>
      expect(new CourseOffering(1, 1, 1, ['night'], true)).toBeInstanceOf(
        CourseOffering,
      )))

  const courseOffering = new CourseOffering(1, 1, 1, ['night'], true)

  describe('#id', () =>
    it('returns id', () => expect(courseOffering.id).toBe(1)))

  describe('#courseId', () =>
    it('returns course id', () => expect(courseOffering.courseId).toBe(1)))

  describe('#institutionId', () =>
    it('returns institution id', () =>
      expect(courseOffering.institutionId).toBe(1)))

  describe('#shifts', () =>
    it('returns shifts', () =>
      expect(courseOffering.shifts).toStrictEqual(['night'])))

  describe('#distanceLearning', () =>
    it('returns distanceLearning', () =>
      expect(courseOffering.distanceLearning).toBe(true)))
})
