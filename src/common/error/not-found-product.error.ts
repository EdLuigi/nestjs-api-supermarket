import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundProductError extends HttpException {
  constructor() {
    super('Product does not exist', HttpStatus.NOT_FOUND);
  }
}
