import { Injectable } from '@nestjs/common'

import { CommentsRepository } from '@app/repositories/comments-repository'
import { Comment } from '@app/entities/comment'

interface GetApprovedCourseOfferingCommentsResponse {
  comments: Comment[]
}

@Injectable()
export class GetNotApprovedComments {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute(): Promise<GetApprovedCourseOfferingCommentsResponse> {
    const comments = await this.commentsRepository.findAllNotApproved()

    return { comments }
  }
}
