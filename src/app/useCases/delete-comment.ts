import { Injectable } from '@nestjs/common'
import { CommentsRepository } from '@app/repositories/comments-repository'

@Injectable()
export class DeleteComment {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute(commentId: number): Promise<void> {
    await this.commentsRepository.delete(commentId)
  }
}
