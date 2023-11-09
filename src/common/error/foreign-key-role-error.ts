import { HttpException, HttpStatus } from '@nestjs/common';

export class ForeignKeyRoleError extends HttpException {
  constructor() {
    super(
      'Role has foreign keys and cannot be removed',
      HttpStatus.BAD_REQUEST,
    );
  }
}
