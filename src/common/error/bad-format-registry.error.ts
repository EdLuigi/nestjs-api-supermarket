import { BadFormatRegistryErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class BadFormatRegistryError extends HttpException {
  constructor() {
    super(
      BadFormatRegistryErrorObj.description,
      BadFormatRegistryErrorObj.status,
    );
  }
}
