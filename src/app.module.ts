import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisman.module';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   autoSchemaFile: true,
    //   driver: ApolloDriver,
    // }),
    PrismaModule,
  ],
})
export class AppModule {}
