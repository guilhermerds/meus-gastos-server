import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';

@Injectable()
export class RevenueService {
  constructor(private readonly prisma: PrismaService){}

  async create(createRevenueDto: CreateRevenueDto) {
    createRevenueDto.month = new Date(createRevenueDto.month);
    // return await this.prisma.revenue.create({data: createRevenueDto});
  }

  async findAll() {
    // return await this.prisma.revenue.findMany();
  }

  async findOne(id: number) {
    // return await this.prisma.revenue.findUnique({where: { id }});
  }

  async update(id: number, updateRevenueDto: UpdateRevenueDto) {
    if( updateRevenueDto.month)
      updateRevenueDto.month = new Date(updateRevenueDto.month);
      
    // return await this.prisma.revenue.update({where: { id }, data: updateRevenueDto});
  }

  async remove(id: number) {
    // return await this.prisma.revenue.delete({where: { id }});
  }
}
