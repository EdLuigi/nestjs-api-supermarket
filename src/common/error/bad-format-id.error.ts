import { BadFormatIdErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class BadFormatIdError extends HttpException {
  constructor() {
    super(BadFormatIdErrorObj.description, BadFormatIdErrorObj.status);
  }
}
