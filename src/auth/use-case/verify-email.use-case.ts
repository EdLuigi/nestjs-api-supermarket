import { ExpiredTokenError } from '@/common/error/expired-token.error';
import { NotFoundTokenError } from '@/common/error/not-found-token.error';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Injectable()
export class VerifyEmailUseCase {
  constructor(private authService: AuthService) {}

  async execute(token: string) {
    const validToken = await this.authService.findEmailToken(token);
    if (!validToken) throw new NotFoundTokenError();
    if (validToken.dueDate < new Date()) throw new ExpiredTokenError();

    const user = await this.authService.verifyEmail(validToken.userId);
    await this.authService.removeEmailToken(token);

    return await this.authService.signToken(user.id, user.registry);
  }
}
