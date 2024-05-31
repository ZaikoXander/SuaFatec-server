import { Comment as RawComment } from '@prisma/client'
import { Comment } from '@app/entities/comment'
import { StudentName } from '@app/entities/comment/studentName'
import { Content } from '@app/entities/comment/content'

export class PrismaCommentMapper {
  static toDomain(raw: RawComment): Comment {
    return new Comment(
      raw.courseOfferingId,
      new StudentName(raw.studentName),
      new Content(raw.content),
      raw.conclusionDate,
      {
        approved: raw.approved,
        quantityLikes: raw.quantityLikes,
        id: raw.id,
      },
    )
  }

  static toPrisma(comment: Comment): RawComment {
    return {
      id: comment.id,
      courseOfferingId: comment.courseOfferingId,
      studentName: comment.studentName.value,
      content: comment.content.value,
      quantityLikes: comment.quantityLikes,
      conclusionDate: comment.conclusionDate,
      approved: comment.approved,
    }
  }
}
