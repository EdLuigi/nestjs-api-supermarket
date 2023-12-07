import { NotFoundSupplierErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class NotFoundSupplierError extends HttpException {
  constructor() {
    super(
      NotFoundSupplierErrorObj.description,
      NotFoundSupplierErrorObj.status,
    );
  }
}
