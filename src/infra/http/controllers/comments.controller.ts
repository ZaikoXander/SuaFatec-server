import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common'

import { GetApprovedCourseOfferingComments } from '@app/useCases/get-approved-courseOffering-comments'
import { CreateComment } from '@app/useCases/create-comment'
import { CommentViewModel } from '../viewModels/comment-view-model'
import { CreateCommentBody } from '../dtos/create-comment-body'

@Controller('comments')
export class CommentsController {
  constructor(
    private getApprovedCourseOfferingComments: GetApprovedCourseOfferingComments,
    private createComment: CreateComment,
  ) {}

  @Get(':courseOfferingId')
  async index(@Param('courseOfferingId') courseOfferingId: string) {
    const { comments } = await this.getApprovedCourseOfferingComments.execute({
      courseOfferingId: Number(courseOfferingId),
    })

    return { comments: comments.map(CommentViewModel.toHTTP) }
  }

  @Post()
  @HttpCode(201)
  async create(@Body() body: CreateCommentBody) {
    try {
      const { courseOfferingId, studentName, content, conclusionDate } = body

      const { comment } = await this.createComment.execute({
        courseOfferingId,
        studentName,
        content,
        conclusionDate,
      })

      return { comment: CommentViewModel.toHTTP(comment) }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      )
    }
  }
}
