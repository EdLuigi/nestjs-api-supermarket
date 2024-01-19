import { IncorrectCredentialsError } from '@/common/error/incorrect-credentials.error';
import { NotFoundUserError } from '@/common/error/not-found-user.error';
import { UsersService } from '@/users/service/users.service';
import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { ResetPasswordDto } from '../dto/reset-password.dto';

@Injectable()
export class ResetPasswordUseCase {
  constructor(private usersService: UsersService) {}

  async execute(id: number, dto: ResetPasswordDto) {
    const userExists = await this.usersService.findOne(id);
    if (!userExists) throw new NotFoundUserError();

    const passwordMatches = await argon.verify(
      userExists.password,
      dto.oldPassword,
    );
    if (!passwordMatches) throw new IncorrectCredentialsError();

    await this.usersService.resetPassword(id, dto.newPassword);
  }
}
