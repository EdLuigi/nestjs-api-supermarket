import { ForeignKeySupplierErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class ForeignKeySupplierError extends HttpException {
  constructor() {
    super(
      ForeignKeySupplierErrorObj.description,
      ForeignKeySupplierErrorObj.status,
    );
  }
}
