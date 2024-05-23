import { Comment } from '@app/entities/comment'

export abstract class CommentsRepository {
  abstract findManyApprovedByCourseOfferingId(
    courseOfferingId: number,
  ): Promise<Comment[]>
}
