import { NotFoundRoleErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundRoleError extends HttpException {
  constructor() {
    super(NotFoundRoleErrorObj.message, NotFoundRoleErrorObj.statusCode);
  }
}
