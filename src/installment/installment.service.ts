import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';

@Injectable()
export class InstallmentService {
  constructor(private readonly prisma: PrismaService){}

  create(createInstallmentDto: CreateInstallmentDto) {
    createInstallmentDto.month = new Date(createInstallmentDto.month);
    // return this.prisma.installment.create({data: createInstallmentDto});
  }

  findAll() {
    // return this.prisma.installment.findMany({ orderBy: { month: 'asc' }});
  }

  findOne(id: number) {
    // return this.prisma.installment.findUnique({where: { id }});
  }

  update(id: number, updateInstallmentDto: UpdateInstallmentDto) {
    if( updateInstallmentDto.month)
      updateInstallmentDto.month = new Date(updateInstallmentDto.month);
    
    // return this.prisma.installment.update({where: { id }, data: updateInstallmentDto});
  }

  remove(id: number) {
    // return this.prisma.installment.delete({where: { id }});
  }
}
