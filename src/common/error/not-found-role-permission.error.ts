import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundRolePermissionError extends HttpException {
  constructor() {
    super('Role-permission does not exist', HttpStatus.NOT_FOUND);
  }
}
