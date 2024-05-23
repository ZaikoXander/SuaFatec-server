import { Comment } from '@app/entities/comment'

export class CommentViewModel {
  static toHTTP(comment: Comment) {
    return {
      id: comment.id,
      courseOfferingId: comment.courseOfferingId,
      studentName: comment.studentName.value,
      content: comment.content.value,
      quantityLikes: comment.quantityLikes,
      conclusionDate: new Date(comment.conclusionDate).toLocaleDateString(
        'pt-BR',
        { year: 'numeric', month: '2-digit', day: '2-digit' },
      ),
      approved: comment.approved,
      liked: false,
    }
  }
}
