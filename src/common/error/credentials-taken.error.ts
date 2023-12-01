import { CredentialsTakenErrorObj } from '@/util/api-error-responses';
import { HttpException } from '@nestjs/common';

export class CredentialsTakenError extends HttpException {
  constructor() {
    super(
      CredentialsTakenErrorObj.description,
      CredentialsTakenErrorObj.status,
    );
  }
}
