import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private readonly dataService: PrismaService) {}

  async createStudent(create: Prisma.LessonCreateInput) {
    console.log(create);
    return await this.dataService.lesson.create({
      data: create,
    });
  }

  async getAllStudent() {
    return await this.dataService.lesson.findMany();
  }
}
