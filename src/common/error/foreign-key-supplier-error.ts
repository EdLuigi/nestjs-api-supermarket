import { HttpException, HttpStatus } from '@nestjs/common';

export class ForeignKeySupplierError extends HttpException {
  constructor() {
    super(
      'Supplier has foreign keys and cannot be removed',
      HttpStatus.BAD_REQUEST,
    );
  }
}
