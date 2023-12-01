import { NotFoundUserErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundUserError extends HttpException {
  constructor() {
    super(NotFoundUserErrorObj.message, NotFoundUserErrorObj.statusCode);
  }
}
