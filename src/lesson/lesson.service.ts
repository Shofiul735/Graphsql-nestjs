import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLessonDto } from './dtos/lesson.dto';
import { validateOrReject } from 'class-validator';

@Injectable()
export class LessonService {
  constructor(private readonly dbService: PrismaService) {}

  async createLesson(create: Prisma.SystemUserCreateInput) {
    const dto = plainToClass(CreateLessonDto, create);

    try {
      validateOrReject(dto);
    } catch (errors) {
      throw new Error(`Validation failed: ${errors}`);
    }

    return this.dbService.systemUser.create({
      data: create,
    });
  }

  async getAllLesson() {
    return await this.dbService.systemUser.findMany();
  }

  async getOne(id: number) {
    return await this.dbService.systemUser.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }
}
