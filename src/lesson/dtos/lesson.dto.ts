import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateLessonDto {
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @Field()
  name: string;
}
