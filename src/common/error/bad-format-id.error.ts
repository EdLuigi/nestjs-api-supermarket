import { BadFormatIdErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class BadFormatIdError extends HttpException {
  constructor() {
    super(BadFormatIdErrorObj.message, BadFormatIdErrorObj.statusCode);
  }
}
