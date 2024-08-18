import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  class?: string;
}
