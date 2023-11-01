import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundRoleError extends HttpException {
  constructor() {
    super('Role does not exist', HttpStatus.NOT_FOUND);
  }
}
