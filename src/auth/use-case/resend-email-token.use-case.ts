import { AlreadyVerifiedEmailError } from '@/common/error/already-verified-email.error';
import { NotFoundEmailError } from '@/common/error/not-found-email.error';
import { EmailService } from '@/common/service/email.service';
import { UsersService } from '@/users/service/users.service';
import { Injectable } from '@nestjs/common';
import { ResendEmailDto } from '../dto/resend-email.dto';
import { AuthService } from '../service/auth.service';

@Injectable()
export class ResendEmailTokenCase {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private emailService: EmailService,
  ) {}

  async execute(dto: ResendEmailDto) {
    const emailExists = await this.usersService.findByEmail(dto.email);
    if (!emailExists) throw new NotFoundEmailError();
    if (emailExists.verified) throw new AlreadyVerifiedEmailError();

    await this.authService.removeEmailTokenByUserId(emailExists.id);

    const token = await this.authService.createEmailToken(
      emailExists.id,
      emailExists.email,
    );

    await this.emailService.send(token);
  }
}
