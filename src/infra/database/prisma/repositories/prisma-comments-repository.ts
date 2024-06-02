import { Injectable } from '@nestjs/common'
import { CommentsRepository } from '@app/repositories/comments-repository'
import { PrismaService } from '../prisma.service'
import { Comment } from '@app/entities/comment'
import { PrismaCommentMapper } from '../mappers/prisma-comment-mapper'

@Injectable()
export class PrismaCommentsRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async findById(commentId: number): Promise<Comment> {
    const comment = await this.prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    })

    return PrismaCommentMapper.toDomain(comment)
  }

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

  async create(comment: Comment): Promise<number> {
    const { id } = await this.prisma.comment.create({
      data: PrismaCommentMapper.toPrisma(comment),
    })

    return id
  }

  async save(comment: Comment): Promise<void> {
    await this.prisma.comment.update({
      where: {
        id: comment.id,
      },
      data: PrismaCommentMapper.toPrisma(comment),
    })
  }
}
