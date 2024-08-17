import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisman.module';
import { LessonModule } from './lesson/lesson.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    PrismaModule,
    LessonModule,
  ],
})
export class AppModule {}
