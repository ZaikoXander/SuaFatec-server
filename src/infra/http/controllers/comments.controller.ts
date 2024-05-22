import { Controller, Get, Param } from '@nestjs/common'

import { GetApprovedCourseOfferingComments } from '@app/useCases/get-approved-courseOffering-comments'
import { CommentViewModel } from '../viewModels/comment-view-model'

@Controller('comments')
export class CommentsController {
  constructor(
    private getApprovedCourseOfferingComments: GetApprovedCourseOfferingComments,
  ) {}

  @Get(':courseOfferingId')
  async index(@Param('courseOfferingId') courseOfferingId: string) {
    const { comments } = await this.getApprovedCourseOfferingComments.execute({
      courseOfferingId: Number(courseOfferingId),
    })

    return { comments: comments.map(CommentViewModel.toHTTP) }
  }
}
