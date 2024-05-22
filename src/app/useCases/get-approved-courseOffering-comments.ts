import { Injectable } from '@nestjs/common'

import { CommentsRepository } from '@app/repositories/comments-repository'
import { Comment } from '@app/entities/comment'

interface GetApprovedCourseOfferingCommentsRequest {
  courseOfferingId: number
}

interface GetApprovedCourseOfferingCommentsResponse {
  comments: Comment[]
}

@Injectable()
export class GetApprovedCourseOfferingComments {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute({
    courseOfferingId,
  }: GetApprovedCourseOfferingCommentsRequest): Promise<GetApprovedCourseOfferingCommentsResponse> {
    const comments =
      await this.commentsRepository.findManyApprovedByCourseOfferingId(
        courseOfferingId,
      )

    return { comments }
  }
}
