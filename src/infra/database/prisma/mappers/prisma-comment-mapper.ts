import { Comment as RawComment } from '@prisma/client'
import { Comment } from '@app/entities/comment'
import { StudentName } from '@app/entities/comment/studentName'
import { Content } from '@app/entities/comment/content'

export class PrismaCommentMapper {
  static toDomain(raw: RawComment): Comment {
    return new Comment(
      raw.id,
      raw.courseOfferingId,
      new StudentName(raw.studentName),
      new Content(raw.content),
      raw.quantityLikes,
      raw.conclusionDate,
      raw.approved,
    )
  }
}
