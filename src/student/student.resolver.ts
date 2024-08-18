import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { LessonType } from 'src/lesson/lesson.type';
import { CreateStudentDto } from './dtos/student.dto';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [StudentType])
  getAllStudent() {
    return this.studentService.getAllStudent();
  }

  @Mutation(() => StudentType)
  createStudent(@Args('createStudent') createStudent: CreateStudentDto) {
    const lessonCreateInput = {
      ...createStudent,
      systemUser: { connect: { id: createStudent.systemUserId } },
    };

    delete lessonCreateInput.systemUserId;

    return this.studentService.createStudent(lessonCreateInput);
  }
}
