import { ExpiredTokenErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class ExpiredTokenError extends HttpException {
  constructor() {
    super(ExpiredTokenErrorObj.description, ExpiredTokenErrorObj.status);
  }
}
