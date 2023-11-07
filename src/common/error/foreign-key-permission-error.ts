import { HttpException, HttpStatus } from '@nestjs/common';

export class ForeignKeyPermissionError extends HttpException {
  constructor() {
    super(
      'Permission is linked with users and cannot be removed',
      HttpStatus.BAD_REQUEST,
    );
  }
}
