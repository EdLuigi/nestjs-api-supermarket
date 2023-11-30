import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SigninDto } from '../dto/signin.dto';
import { SignupDto } from '../dto/signup.dto';
import { SigninUseCase } from '../use-case/signin.use-case';
import { SignupUseCase } from '../use-case/signup.use-case';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly signinUseCase: SigninUseCase,
    private readonly signupUseCase: SignupUseCase,
  ) {}

  @Post('signup')
  signup(@Body() dto: SignupDto) {
    return this.signupUseCase.execute(dto);
  }

  @Post('signin')
  signin(@Body() dto: SigninDto) {
    return this.signinUseCase.execute(dto);
  }
}
