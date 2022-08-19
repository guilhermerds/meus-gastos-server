import { Module } from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { RevenueController } from './revenue.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RevenueController],
  providers: [RevenueService, PrismaService]
})
export class RevenueModule {}
