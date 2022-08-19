import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CardModule } from './card/card.module';
import { PrismaService } from './prisma.service';
import { ExpensesModule } from './expenses/expenses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstallmentModule } from './installment/installment.module';
import { RevenueModule } from './revenue/revenue.module';

@Module({
  imports: [ConfigModule.forRoot(),CardModule, ExpensesModule, InstallmentModule, RevenueModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
