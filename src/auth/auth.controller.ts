import { Controller, Post, Body, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenPayload } from './dto/token-payload.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signin')
  async signIn(@Body() signIn: { email: string; password: string }) {
    return await this.authService.signIn(signIn.email, signIn.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: TokenPayload) {
    return req.user;
  }
}
