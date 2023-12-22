import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EmailNotSentError } from '../error/email-not-sent.error';

@Injectable()
export class SendEmailService {
  constructor(private readonly mailerService: MailerService) {}

  async execute(email: string) {
    try {
      const configEmail = {
        from: 'no-reply@mail.com <Nestjs-Supermarket-API project>',
        to: email,
        subject: 'Email Validation',
        html: `<b>Hey there, ${email}! </b><br><br> Click the link to verify your email: [link]`,
      };

      await this.mailerService.sendMail(configEmail);
    } catch (error) {
      throw new EmailNotSentError();
    }
  }
}
