import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return 'I am signup';
  }

  @Post('signin')
  signin() {
    return 'I am signin';
  }
}
