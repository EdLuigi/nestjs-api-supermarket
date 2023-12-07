import { NotFoundUserErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundUserError extends HttpException {
  constructor() {
    super(NotFoundUserErrorObj.description, NotFoundUserErrorObj.status);
  }
}
