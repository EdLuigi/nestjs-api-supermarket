import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundPermissionError extends HttpException {
  constructor() {
    super('Permission does not exist', HttpStatus.NOT_FOUND);
  }
}
