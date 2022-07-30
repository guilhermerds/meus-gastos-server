import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService){}

  async create(createCardDto: CreateCardDto) {
    return await this.prisma.card.create({data: createCardDto});
  }

  async findAll() {
    return await this.prisma.card.findMany();
  }

  async findAllRecursive(){
    return await this.prisma.card.findMany({ include: {purchases: { include: { installments: true }}}});
  }

  async findOne(id: number) {
    return await this.prisma.card.findUnique({where: { id }});
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    return await this.prisma.card.update({where: {id}, data: updateCardDto});
  }

  async remove(id: number) {
    return await this.prisma.card.delete({where: {id}});
  }
}
