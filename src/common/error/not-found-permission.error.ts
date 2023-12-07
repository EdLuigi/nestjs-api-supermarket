import { NotFoundPermissionErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundPermissionError extends HttpException {
  constructor() {
    super(
      NotFoundPermissionErrorObj.description,
      NotFoundPermissionErrorObj.status,
    );
  }
}
