import { Comment } from '.'
import { StudentName } from './studentName'
import { Content } from './content'

describe(Comment, () => {
  const studentName = new StudentName('John Doe')
  const content = new Content(
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto.',
  )
  const date = new Date('2022-01-01')

  describe('#constructor', () =>
    it('instantiates', () =>
      expect(
        new Comment(1, 1, studentName, content, 10, date, true),
      ).toBeInstanceOf(Comment)))

  const comment = new Comment(1, 1, studentName, content, 10, date, true)

  describe('#id', () => it('returns id', () => expect(comment.id).toBe(1)))

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

  describe('#conclusionDate', () =>
    it('returns conclusionDate', () =>
      expect(comment.conclusionDate).toBe(date)))

  describe('#approved', () =>
    it('returns approved', () => expect(comment.approved).toBe(true)))
})
