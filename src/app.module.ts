import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CardModule } from './card/card.module';
import { PrismaService } from './prisma.service';
import { ExpensesModule } from './expenses/expenses.module';
import { InstallmentModule } from './installment/installment.module';
import { RevenueModule } from './revenue/revenue.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), CardModule, ExpensesModule, InstallmentModule, RevenueModule, UserModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule { }
