import { IdFormatValidationPipe } from '@/common/pipe/id-format-validation.pipe';
import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResendEmailTokenDoc } from '../documentation/resend-email-token.doc';
import { ResetPasswordDoc } from '../documentation/reset-password.doc';
import { SigninDoc } from '../documentation/signin.doc';
import { SignupDevDoc } from '../documentation/signup-dev.doc';
import { SignupDoc } from '../documentation/signup.doc';
import { VerifyEmailDoc } from '../documentation/verify-email.doc';
import { ResendEmailDto } from '../dto/resend-email.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { SigninDto } from '../dto/signin.dto';
import { SignupDto } from '../dto/signup.dto';
import { ResendEmailTokenCase } from '../use-case/resend-email-token.use-case';
import { ResetPasswordUseCase } from '../use-case/reset-password.use-case';
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
    private readonly resetPasswordUseCase: ResetPasswordUseCase,
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

  @Post('resend-email-token/:email')
  @ResendEmailTokenDoc()
  resendEmailToken(@Param() email: ResendEmailDto) {
    return this.resendEmailTokenUseCase.execute(email);
  }

  @Patch('reset-password/:id')
  @ResetPasswordDoc()
  resetPassword(
    @Param('id', IdFormatValidationPipe) id: number,
    @Body() resetPasswordDto: ResetPasswordDto,
  ) {
    return this.resetPasswordUseCase.execute(id, resetPasswordDto);
  }
}
