import { Injectable } from '@nestjs/common'
import { Comment } from '@app/entities/comment'
import { Content } from '@app/entities/comment/content'
import { StudentName } from '@app/entities/comment/studentName'
import { CommentsRepository } from '@app/repositories/comments-repository'

interface CreateCommentRequest {
  courseOfferingId: number
  studentName: string
  content: string
  conclusionDate: Date
}

interface CreateCommentResponse {
  comment: Comment
}

@Injectable()
export class CreateComment {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute({
    courseOfferingId,
    studentName,
    content,
    conclusionDate,
  }: CreateCommentRequest): Promise<CreateCommentResponse> {
    const comment = new Comment(
      courseOfferingId,
      new StudentName(studentName),
      new Content(content),
      conclusionDate,
    )

    const commentId = await this.commentsRepository.create(comment)

    comment.id = commentId

    return { comment }
  }
}
