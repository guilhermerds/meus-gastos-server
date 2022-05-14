import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CardModule } from './card/card.module';
import { PrismaService } from './prisma.service';
import { ExpensesModule } from './expenses/expenses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(),CardModule, ExpensesModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
