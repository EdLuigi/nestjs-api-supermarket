import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundSupplierError extends HttpException {
  constructor() {
    super('Supplier does not exist', HttpStatus.NOT_FOUND);
  }
}
