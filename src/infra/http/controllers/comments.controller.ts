import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { GetApprovedCourseOfferingComments } from '@app/useCases/get-approved-courseOffering-comments'
import { CreateComment } from '@app/useCases/create-comment'
import { CommentViewModel } from '../viewModels/comment-view-model'
import { CreateCommentBody } from '../dtos/create-comment-body'
import { LikeComment } from '@app/useCases/like-comment'
import { DislikeComment } from '@app/useCases/dislike-comment'
import { ApproveComment } from '@app/useCases/approve-comment'
import { DisapproveComment } from '@app/useCases/disapprove-comment'
import { GetNotApprovedComments } from '@app/useCases/get-not-approved-comments'

@Controller('comments')
export class CommentsController {
  constructor(
    private getApprovedCourseOfferingComments: GetApprovedCourseOfferingComments,
    private createComment: CreateComment,
    private likeComment: LikeComment,
    private dislikeComment: DislikeComment,
    private approveComment: ApproveComment,
    private disapproveComment: DisapproveComment,
    private getNotApprovedComments: GetNotApprovedComments,
  ) {}

  @Get('course-offering/:id')
  async index(@Param('id') courseOfferingId: string) {
    const { comments } = await this.getApprovedCourseOfferingComments.execute({
      courseOfferingId: Number(courseOfferingId),
    })

    return { comments: comments.map(CommentViewModel.toHTTP) }
  }

  @Get('not-approved')
  async notApproved() {
    try {
      const { comments } = await this.getNotApprovedComments.execute()

      return { comments: comments.map(CommentViewModel.toHTTP) }
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

  @Patch(':commentId/like')
  @HttpCode(204)
  async like(@Param('commentId') commentId: string) {
    try {
      const id = Number(commentId)

      await this.likeComment.execute(id)
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

  @Patch(':commentId/dislike')
  @HttpCode(204)
  async dislike(@Param('commentId') commentId: string) {
    try {
      const id = Number(commentId)

      await this.dislikeComment.execute(id)
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

  @Patch(':commentId/approve')
  @HttpCode(204)
  async approve(@Param('commentId') commentId: string) {
    try {
      const id = Number(commentId)

      await this.approveComment.execute(id)
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

  @Patch(':commentId/disapprove')
  @HttpCode(204)
  async disapprove(@Param('commentId') commentId: string) {
    try {
      const id = Number(commentId)

      await this.disapproveComment.execute(id)
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
