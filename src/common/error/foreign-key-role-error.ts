import { ForeignKeyRoleErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class ForeignKeyRoleError extends HttpException {
  constructor() {
    super(ForeignKeyRoleErrorObj.message, ForeignKeyRoleErrorObj.statusCode);
  }
}
