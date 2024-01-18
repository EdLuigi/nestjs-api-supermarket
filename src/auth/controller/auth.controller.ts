import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResendEmailTokenDoc } from '../documentation/resend-email-token.doc';
import { SigninDoc } from '../documentation/signin.doc';
import { SignupDevDoc } from '../documentation/signup-dev.doc';
import { SignupDoc } from '../documentation/signup.doc';
import { VerifyEmailDoc } from '../documentation/verify-email.doc';
import { ResendEmailDto } from '../dto/resend-email.dto';
import { SigninDto } from '../dto/signin.dto';
import { SignupDto } from '../dto/signup.dto';
import { ResendEmailTokenCase } from '../use-case/resend-email-token.use-case';
import { SigninUseCase } from '../use-case/signin.use-case';
import { SignupDevUseCase } from '../use-case/signup-dev.use-case';
import { SignupUseCase } from '../use-case/signup.use-case';
import { VerifyEmailUseCase } from '../use-case/verify-email.use-case';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly signinUseCase: SigninUseCase,
    private readonly signupUseCase: SignupUseCase,
    private readonly signupDevUseCase: SignupDevUseCase,
    private readonly verifyEmailUseCase: VerifyEmailUseCase,
    private readonly resendEmailTokenUseCase: ResendEmailTokenCase,
  ) {}

  @Post('signup')
  @SignupDoc()
  signup(@Body() dto: SignupDto) {
    return this.signupUseCase.execute(dto);
  }

  @Post('signup-dev')
  @SignupDevDoc()
  signupDev(@Body() dto: SignupDto) {
    return this.signupDevUseCase.execute(dto);
  }

  @Post('signin')
  @SigninDoc()
  signin(@Body() dto: SigninDto) {
    return this.signinUseCase.execute(dto);
  }

  @Post('verify-email/:token')
  @VerifyEmailDoc()
  verifyEmail(@Param('token') token: string) {
    return this.verifyEmailUseCase.execute(token);
  }

  // TODO: RESEND EMAIL TOKEN DOCS
  @Post('resend-email-token/:email')
  @ResendEmailTokenDoc()
  resendEmailToken(@Param() email: ResendEmailDto) {
    return this.resendEmailTokenUseCase.execute(email);
  }

  // TODO: FORGOT PASSWORD ROUTE (PATCH)
  // TODO: FORGOT PASSWORD DOCS

  // TODO: IMPLEMENT GENERIC ROUTE SEND-TO-EMAIL (GET) (?)
}
