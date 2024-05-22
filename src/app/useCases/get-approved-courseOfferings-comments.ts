import { Injectable } from '@nestjs/common'

import { CommentsRepository } from '@app/repositories/comments-repository'
import { Comment } from '@app/entities/comment'

interface GetApprovedCourseOfferingsCommentsRequest {
  courseOfferingId: number
}

interface GetApprovedCourseOfferingsCommentsResponse {
  comments: Comment[]
}

@Injectable()
export class GetApprovedCourseOfferingsComments {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute({
    courseOfferingId,
  }: GetApprovedCourseOfferingsCommentsRequest): Promise<GetApprovedCourseOfferingsCommentsResponse> {
    const comments =
      await this.commentsRepository.findManyApprovedByCourseOfferingId(
        courseOfferingId,
      )

    return { comments }
  }
}
