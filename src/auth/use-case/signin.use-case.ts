import { IncorrectCredentialsError } from '@/common/error/incorrect-credentials.error';
import { UnverifiedUserError } from '@/common/error/unverified-user.error';
import { UsersService } from '@/users/service/users.service';
import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { SigninDto } from '../dto/signin.dto';
import { AuthService } from '../service/auth.service';

@Injectable()
export class SigninUseCase {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  async execute(signinData: SigninDto) {
    const emailExists = await this.usersService.findByEmail(signinData.email);
    if (!emailExists) throw new IncorrectCredentialsError();
    if (!emailExists.verified) throw new UnverifiedUserError();

    const passwordMatches = await argon.verify(
      emailExists.password,
      signinData.password,
    );
    if (!passwordMatches) throw new IncorrectCredentialsError();

    return await this.authService.signToken(emailExists.id, emailExists.email);
  }
}
