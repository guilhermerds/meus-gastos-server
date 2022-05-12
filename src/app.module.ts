import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CardModule } from './card/card.module';
import { PrismaService } from './prisma.service';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [ConfigModule.forRoot(),CardModule, ExpensesModule],
  // controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
