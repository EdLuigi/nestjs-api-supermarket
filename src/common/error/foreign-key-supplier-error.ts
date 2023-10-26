import { HttpException, HttpStatus } from '@nestjs/common';

export class ForeignKeySupplierError extends HttpException {
  constructor() {
    super(
      'Supplier has products and cannot be removed',
      HttpStatus.BAD_REQUEST,
    );
  }
}
