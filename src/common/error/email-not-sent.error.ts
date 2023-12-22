import { EmailNotSentErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class EmailNotSentError extends HttpException {
  constructor() {
    super(EmailNotSentErrorObj.description, EmailNotSentErrorObj.status);
  }
}
