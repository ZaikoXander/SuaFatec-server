import { Injectable } from '@nestjs/common'
import { CommentsRepository } from '@app/repositories/comments-repository'

@Injectable()
export class DisapproveComment {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute(commentId: number): Promise<void> {
    const comment = await this.commentsRepository.findById(commentId)

    comment.disapprove()

    await this.commentsRepository.save(comment)
  }
}
