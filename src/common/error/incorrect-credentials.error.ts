import { IncorrectCredentialsErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class IncorrectCredentialsError extends HttpException {
  constructor() {
    super(
      IncorrectCredentialsErrorObj.description,
      IncorrectCredentialsErrorObj.status,
    );
  }
}
