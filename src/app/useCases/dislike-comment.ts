import { Injectable } from '@nestjs/common'
import { CommentsRepository } from '@app/repositories/comments-repository'

@Injectable()
export class DislikeComment {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute(commentId: number): Promise<void> {
    const comment = await this.commentsRepository.findById(commentId)

    comment.dislike()

    await this.commentsRepository.save(comment)
  }
}
