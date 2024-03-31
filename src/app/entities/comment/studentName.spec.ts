import { StudentName } from './studentName'

describe(StudentName, () => {
  const value = 'John Doe'

  describe('#constructor', () => {
    describe('when value length is lower than 2', () =>
      it('throws error', () =>
        expect(() => new StudentName('a')).toThrow(
          'Student name is too short',
        )))

    describe('when value length is greater than 64', () =>
      it('throws error', () =>
        expect(() => new StudentName('a'.repeat(65))).toThrow(
          'Student name is too long',
        )))

    describe('when value length is within limits', () =>
      it('instantiates', () =>
        expect(new StudentName(value)).toBeInstanceOf(StudentName)))
  })

  describe('#value', () =>
    it('returns value', () => expect(new StudentName(value).value).toBe(value)))
})
