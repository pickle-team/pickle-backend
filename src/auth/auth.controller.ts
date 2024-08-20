import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RequestUserDto } from './dto/request.user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('login')
  async login(@Body() body: { id: string }) {
    this.authService.login(body);
  }

  @Post('register')
  async register(@Body() body: RequestUserDto) {
    this.authService.register(body);
  }
}
