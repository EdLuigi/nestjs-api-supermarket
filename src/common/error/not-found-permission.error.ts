import { NotFoundPermissionErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundPermissionError extends HttpException {
  constructor() {
    super(
      NotFoundPermissionErrorObj.message,
      NotFoundPermissionErrorObj.statusCode,
    );
  }
}
