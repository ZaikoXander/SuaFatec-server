import { Comment } from '.'
import { StudentName } from './studentName'
import { Content } from './content'
import { Institution } from '../institution'
import { City } from '../city'
import { CourseOffering } from '../courseOffering'
import { Course } from '../course'

describe(Comment, () => {
  const course = new Course(1, 'Ciência de Dados', 6, [])
  const city = new City(1, 'Santos', [])
  const institution = new Institution(
    1,
    'Fatec de Santos',
    'Av. Senador Feijó, 350 - Vila Matias, Santos - SP, 11015-502',
    city,
    [],
    [],
  )
  const courseOffering = new CourseOffering(
    1,
    course,
    institution,
    ['night'],
    [],
    true,
  )

  const studentName = new StudentName('John Doe')
  const content = new Content(
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto.',
  )

  describe('#constructor', () =>
    it('instantiates', () =>
      expect(
        new Comment(
          1,
          courseOffering,
          studentName,
          content,
          10,
          '2022-01-01',
          true,
        ),
      ).toBeInstanceOf(Comment)))

  const comment = new Comment(
    1,
    courseOffering,
    studentName,
    content,
    10,
    '2022-01-01',
    true,
  )

  describe('#id', () => it('returns id', () => expect(comment.id).toBe(1)))

  describe('#courseOffering', () =>
    it('returns courseOffering', () =>
      expect(comment.courseOffering).toBe(courseOffering)))

  describe('#studentName', () =>
    it('returns studentName', () =>
      expect(comment.studentName).toBe(studentName)))

  describe('#content', () =>
    it('returns content', () => expect(comment.content).toBe(content)))

  describe('#quantityLikes', () =>
    it('returns quantityLikes', () => expect(comment.quantityLikes).toBe(10)))

  describe('#conclusionDate', () =>
    it('returns conclusionDate', () =>
      expect(comment.conclusionDate).toBe('2022-01-01')))

  describe('#approved', () =>
    it('returns approved', () => expect(comment.approved).toBe(true)))
})
