import { Comment } from '.'
import { StudentName } from './studentName'
import { Content } from './content'

describe(Comment, () => {
  const studentName = new StudentName('John Doe')
  const content = new Content(
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto.',
  )
  const date = new Date('2022-01-01')

  describe('#constructor', () => {
    describe('when comment has id', () => {
      it('instantiates', () =>
        expect(
          new Comment(1, studentName, content, date, {
            quantityLikes: 10,
            approved: true,
          }),
        ).toBeInstanceOf(Comment))
    })

    describe('when comment does not have id', () => {
      expect(
        new Comment(1, studentName, content, date, {
          quantityLikes: 10,
          approved: true,
        }),
      ).toBeInstanceOf(Comment)
    })
  })

  const comment = new Comment(1, studentName, content, date, {
    quantityLikes: 10,
    approved: true,
    id: 1,
  })

  describe('#courseOfferingId', () =>
    it('returns courseOffering id', () =>
      expect(comment.courseOfferingId).toBe(1)))

  describe('#studentName', () =>
    it('returns studentName', () =>
      expect(comment.studentName).toBe(studentName)))

  describe('#content', () =>
    it('returns content', () => expect(comment.content).toBe(content)))

  describe('#quantityLikes', () =>
    it('returns quantityLikes', () => expect(comment.quantityLikes).toBe(10)))

  describe('#like', () => {
    it('increases quantityLikes by 1', () => {
      comment.like()
      expect(comment.quantityLikes).toBe(11)
    })
  })

  describe('#conclusionDate', () =>
    it('returns conclusionDate', () =>
      expect(comment.conclusionDate).toBe(date)))

  describe('#approved', () =>
    it('returns approved', () => expect(comment.approved).toBe(true)))

  describe('#id', () => {
    describe('when comment has id', () => {
      it('returns id', () => expect(comment.id).toBe(1))
    })

    describe('when comment does not have id', () => {
      it('returns undefined', () => {
        expect(
          new Comment(1, studentName, content, date, { quantityLikes: 10 }).id,
        ).toBe(undefined)
      })
    })
  })
})
