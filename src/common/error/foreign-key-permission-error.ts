import { ForeignKeyPermissionErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class ForeignKeyPermissionError extends HttpException {
  constructor() {
    super(
      ForeignKeyPermissionErrorObj.description,
      ForeignKeyPermissionErrorObj.status,
    );
  }
}
