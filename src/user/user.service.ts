import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserPassDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { email: createUserDto.email } })

    if (user) {
      throw new HttpException('Já existe um usuário com esse Email!', HttpStatus.BAD_REQUEST);
    }

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    console.log(await this.prisma.user.create({ data: createUserDto }));

    return;
  }

  async findOne(id: string) {
    const { name, email } = await this.prisma.user.findUnique({ where: { id: id } });

    return { name, email };
  }

  async update(id: string, {email, name}: UpdateUserDto) {
    const user = await this.prisma.user.findFirst({ where: { email, NOT: { id } } });

    if (user) {
      throw new HttpException('Já existe um usuário com esse Email!', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.user.update({
      where: { id },
      data: { email, name }
    });

    return;
  }

  async updatePass(id: string, {oldPass, newPass}: UpdateUserPassDto) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
    }

    const isMatch = await bcrypt.compare(oldPass, user.password);

    if (!isMatch) {
      throw new HttpException('Senha antiga incorreta!', HttpStatus.BAD_REQUEST);
    }

    if (newPass.length < 8) {
      throw new HttpException('A senha deve ter pelo menos 8 caracteres!', HttpStatus.BAD_REQUEST);
    }

    if (oldPass === newPass) {
      throw new HttpException('A nova senha deve ser diferente da antiga!', HttpStatus.BAD_REQUEST);
    }

    newPass = await bcrypt.hash(newPass, 10);

    await this.prisma.user.update({
      where: { id },
      data: { password: newPass }
    });

    return;
  }
}
