import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service'; // Create this service

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
