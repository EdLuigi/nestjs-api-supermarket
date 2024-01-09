import { UnverifiedUserErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class UnverifiedUserError extends HttpException {
  constructor() {
    super(UnverifiedUserErrorObj.description, UnverifiedUserErrorObj.status);
  }
}
