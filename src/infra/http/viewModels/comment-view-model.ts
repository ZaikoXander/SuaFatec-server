import { Comment } from '@app/entities/comment'

export class CommentViewModel {
  static toHTTP(comment: Comment) {
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
