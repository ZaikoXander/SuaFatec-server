import { Comment } from '@app/entities/comment'

export abstract class CommentsRepository {
  abstract findById(commentId: number): Promise<Comment>

  abstract findManyApprovedByCourseOfferingId(
    courseOfferingId: number,
  ): Promise<Comment[]>

  abstract findAllNotApproved(): Promise<Comment[]>

  abstract create(comment: Comment): Promise<number>

  abstract save(comment: Comment): Promise<void>
}
