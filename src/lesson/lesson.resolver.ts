import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { Prisma } from '@prisma/client';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dtos/lesson.dto';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(() => [LessonType])
  async lessons(): Promise<LessonType[]> {
    return this.lessonService.getAllLesson();
  }

  @Query(() => LessonType)
  async lesson(@Args('id') id: number): Promise<LessonType> {
    return this.lessonService.getOne(id);
  }

  @Mutation((returns) => LessonType)
  async createLesson(
    @Args('createInput') createInput: CreateLessonDto,
  ): Promise<LessonType> {
    return await this.lessonService.createLesson(createInput);
  }
}
