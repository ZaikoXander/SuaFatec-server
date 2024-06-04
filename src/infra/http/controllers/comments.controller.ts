import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common'

import { GetApprovedCourseOfferingComments } from '@app/useCases/get-approved-courseOffering-comments'
import { CreateComment } from '@app/useCases/create-comment'
import { CommentViewModel } from '../viewModels/comment-view-model'
import { CreateCommentBody } from '../dtos/create-comment-body'
import { LikeComment } from '@app/useCases/like-comment'
import { DislikeComment } from '@app/useCases/dislike-comment'
import { ApproveComment } from '@app/useCases/approve-comment'
import { DeleteComment } from '@app/useCases/delete-comment'
import { GetNotApprovedComments } from '@app/useCases/get-not-approved-comments'
import { AuthGuard } from '@infra/auth/auth.guard'

@Controller('comments')
export class CommentsController {
  constructor(
    private getApprovedCourseOfferingComments: GetApprovedCourseOfferingComments,
    private createComment: CreateComment,
    private likeComment: LikeComment,
    private dislikeComment: DislikeComment,
    private approveComment: ApproveComment,
    private deleteComment: DeleteComment,
    private getNotApprovedComments: GetNotApprovedComments,
  ) {}

  @Get('course-offering/:id')
  async index(@Param('id') courseOfferingId: string) {
    const { comments } = await this.getApprovedCourseOfferingComments.execute({
      courseOfferingId: Number(courseOfferingId),
    })

    return { comments: comments.map(CommentViewModel.toHTTP) }
  }

  @UseGuards(AuthGuard)
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

  @UseGuards(AuthGuard)
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

  @UseGuards(AuthGuard)
  @Delete(':commentId')
  @HttpCode(200)
  async disapprove(@Param('commentId') commentId: string) {
    try {
      const id = Number(commentId)

      await this.deleteComment.execute(id)
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
