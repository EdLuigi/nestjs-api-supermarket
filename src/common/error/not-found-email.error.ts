import { NotFoundEmailErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundEmailError extends HttpException {
  constructor() {
    super(NotFoundEmailErrorObj.description, NotFoundEmailErrorObj.status);
  }
}
