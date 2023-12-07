import { NotFoundUserRoleErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundUserRoleError extends HttpException {
  constructor() {
    super(
      NotFoundUserRoleErrorObj.description,
      NotFoundUserRoleErrorObj.status,
    );
  }
}
