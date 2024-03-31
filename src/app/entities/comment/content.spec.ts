import { Content } from './content'

describe(Content, () => {
  const value =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto.'

  describe('#constructor', () => {
    describe('when value length is lower than 5', () =>
      it('throws error', () =>
        expect(() => new Content('0000')).toThrow('Content is too short')))

    describe('when value length is greater than 280', () =>
      it('throws error', () =>
        expect(() => new Content('0'.repeat(281))).toThrow(
          'Content is too long',
        )))

    describe('when value length is within limits', () =>
      it('instantiates', () =>
        expect(new Content(value)).toBeInstanceOf(Content)))
  })

  describe('#value', () =>
    it('returns value', () => expect(new Content(value).value).toBe(value)))
})
