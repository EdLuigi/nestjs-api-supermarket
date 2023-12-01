import { NotFoundRolePermissionErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundRolePermissionError extends HttpException {
  constructor() {
    super(
      NotFoundRolePermissionErrorObj.description,
      NotFoundRolePermissionErrorObj.status,
    );
  }
}
