import { Module } from '@nestjs/common';
import { InstallmentService } from './installment.service';
import { InstallmentController } from './installment.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [InstallmentController],
  providers: [InstallmentService, PrismaService]
})
export class InstallmentModule {}
