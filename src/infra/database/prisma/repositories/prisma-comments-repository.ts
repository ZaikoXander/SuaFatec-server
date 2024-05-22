import { Injectable } from '@nestjs/common'
import { CommentsRepository } from '@app/repositories/comments-repository'
import { PrismaService } from '../prisma.service'
import { Comment } from '@app/entities/comment'
import { PrismaCommentMapper } from '../mappers/prisma-comment-mapper'

@Injectable()
export class PrismaCommentsRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async findManyApprovedByCourseOfferingId(
    courseOfferingId: number,
  ): Promise<Comment[]> {
    const comments = await this.prisma.comment.findMany({
      where: {
        courseOfferingId,
        approved: true,
      },
    })

    return comments.map(PrismaCommentMapper.toDomain)
  }
}
