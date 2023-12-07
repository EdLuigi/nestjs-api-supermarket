import { NotFoundRoleErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundRoleError extends HttpException {
  constructor() {
    super(NotFoundRoleErrorObj.description, NotFoundRoleErrorObj.status);
  }
}
