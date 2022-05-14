import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(private readonly prisma: PrismaService){}

  async create(createExpenseDto: CreateExpenseDto) {
    return await this.prisma.purchases.create({data :createExpenseDto});
  }

  async findAll() {
    return await this.prisma.purchases.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.purchases.findUnique({where: { id }});
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return this.prisma.purchases.update({where: { id }, data: updateExpenseDto});
  }

  async remove(id: number) {
    return await this.prisma.purchases.delete({where: { id }});
  }
}
