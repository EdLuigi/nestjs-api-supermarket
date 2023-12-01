import { ForbiddenErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class ForbiddenError extends HttpException {
  constructor() {
    super(ForbiddenErrorObj.message, ForbiddenErrorObj.statusCode);
  }
}
