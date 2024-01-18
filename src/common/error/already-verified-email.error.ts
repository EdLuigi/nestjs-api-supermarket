import { AlreadyVerifiedEmailErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class AlreadyVerifiedEmailError extends HttpException {
  constructor() {
    super(
      AlreadyVerifiedEmailErrorObj.description,
      AlreadyVerifiedEmailErrorObj.status,
    );
  }
}
