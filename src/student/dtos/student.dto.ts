import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateStudentDto {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  class?: string;

  @Field()
  @IsInt()
  @IsNotEmpty()
  systemUserId: number;
}
