import { ForeignKeyRoleErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class ForeignKeyRoleError extends HttpException {
  constructor() {
    super(ForeignKeyRoleErrorObj.description, ForeignKeyRoleErrorObj.status);
  }
}
