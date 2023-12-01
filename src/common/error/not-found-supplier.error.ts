import { NotFoundSupplierErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundSupplierError extends HttpException {
  constructor() {
    super(
      NotFoundSupplierErrorObj.message,
      NotFoundSupplierErrorObj.statusCode,
    );
  }
}
