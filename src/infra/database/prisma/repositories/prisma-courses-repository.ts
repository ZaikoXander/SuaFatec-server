import { Injectable } from '@nestjs/common'

import { CoursesRepository } from '@app/repositories/courses-repository'
import { PrismaService } from '../prisma.service'
import { Course } from '@app/entities/course'
import { PrismaCourseMapper } from '../mappers/prisma-course-mapper'

@Injectable()
export class PrismaCoursesRepository implements CoursesRepository {
  constructor(private prisma: PrismaService) {}

  async findManyByCourseIds(courseIds: number[]): Promise<Course[]> {
    const courses = await this.prisma.course.findMany({
      where: { id: { in: courseIds } },
    })

    return courses.map(PrismaCourseMapper.toDomain)
  }
}
