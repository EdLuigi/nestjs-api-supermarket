import { EmailToken } from '@/auth/entities/email-token.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EmailNotSentError } from '../error/email-not-sent.error';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async send(token: EmailToken) {
    try {
      const configEmail = {
        from: 'no-reply@mail.com <Nestjs-Supermarket-API project>',
        to: token.email,
        subject: 'Email Validation',
        html: `<b>Hey there, ${token.email}! </b><br><br> 
        Click <a href="${process.env.BASE_URL}/auth/confirm-email/${token.id}">here</a> 
        to verify your email.`,
      };

      await this.mailerService.sendMail(configEmail);
    } catch (error) {
      throw new EmailNotSentError();
    }
  }
}
