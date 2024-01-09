import { NotFoundTokenErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundTokenError extends HttpException {
  constructor() {
    super(NotFoundTokenErrorObj.description, NotFoundTokenErrorObj.status);
  }
}
