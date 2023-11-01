import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundUserRoleError extends HttpException {
  constructor() {
    super('User role does not exist', HttpStatus.NOT_FOUND);
  }
}
