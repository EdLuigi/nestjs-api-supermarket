import { NotFoundProductErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundProductError extends HttpException {
  constructor() {
    super(NotFoundProductErrorObj.description, NotFoundProductErrorObj.status);
  }
}
