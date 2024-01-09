import { EmailService } from '@/common/service/email.service';
import { UsersService } from '@/users/service/users.service';
import { UsersRolesService } from '@/users_roles/service/users_roles.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { SigninUseCase } from './use-case/signin.use-case';
import { SignupDevUseCase } from './use-case/signup-dev.use-case';
import { SignupUseCase } from './use-case/signup.use-case';
import { VerifyEmailUseCase } from './use-case/verify-email.use-case';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    UsersRolesService,
    JwtStrategy,
    SigninUseCase,
    SignupUseCase,
    SignupDevUseCase,
    VerifyEmailUseCase,
    EmailService,
  ],
})
export class AuthModule {}
