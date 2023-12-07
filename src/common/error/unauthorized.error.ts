import { UnauthorizedErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class UnauthorizedError extends HttpException {
  constructor() {
    super(UnauthorizedErrorObj.description, UnauthorizedErrorObj.status);
  }
}
