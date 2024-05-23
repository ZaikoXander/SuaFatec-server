import { Comment } from '@app/entities/comment'

export class CommentViewModel {
  static toHTTP(comment: Comment) {
    return {
      id: comment.id,
      courseOfferingId: comment.courseOfferingId,
      studentName: comment.studentName.value,
      content: comment.content.value,
      quantityLikes: comment.quantityLikes,
      conclusionDate: new Date(comment.conclusionDate).toLocaleDateString(),
      approved: comment.approved,
      liked: false,
    }
  }
}
