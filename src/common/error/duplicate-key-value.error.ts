import { DuplicateKeyValueErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class DuplicateKeyValueError extends HttpException {
  constructor(credential: string) {
    super(
      DuplicateKeyValueErrorObj.description + ': ' + credential,
      DuplicateKeyValueErrorObj.status,
    );
  }
}
