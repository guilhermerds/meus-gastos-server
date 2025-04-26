import { Controller, Get, Post, Body, Patch, Param, Request, HttpCode, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserPassDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { TokenPayload } from 'src/auth/dto/token-payload.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto?.email || !createUserDto?.password || !createUserDto?.name) {
      throw new HttpException('Nome, email e senha são obrigatórios!', HttpStatus.BAD_REQUEST);
    }
    if (createUserDto.password.length < 8) {
      throw new HttpException('A senha deve ter pelo menos 8 caracteres!', HttpStatus.BAD_REQUEST);
    }

    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findOne(@Request() req: TokenPayload) {
    return this.userService.findOne(req.user.id);
  }

  @Patch()
  @HttpCode(204)
  @UseGuards(AuthGuard)
  update(@Request() req: TokenPayload, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req.user.id, updateUserDto);
  }

  @Patch('password')
  @HttpCode(204)
  @UseGuards(AuthGuard)
  updatePass(@Request() req: TokenPayload, @Body() updateUserPassDto: UpdateUserPassDto) {
    return this.userService.updatePass(req.user.id, updateUserPassDto);
  }
}
