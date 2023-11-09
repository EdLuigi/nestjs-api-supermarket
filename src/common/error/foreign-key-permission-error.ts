import { HttpException, HttpStatus } from '@nestjs/common';

export class ForeignKeyPermissionError extends HttpException {
  constructor() {
    super(
      'Permission has foreign keys and cannot be removed',
      HttpStatus.BAD_REQUEST,
    );
  }
}
