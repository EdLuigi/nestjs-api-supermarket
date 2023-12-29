import { CredentialsTakenErrorObj } from '@/utils/api-error-responses';
import { HttpException } from '@nestjs/common';

export class CredentialsTakenError extends HttpException {
  constructor(credential: string) {
    super(
      CredentialsTakenErrorObj.description + ': ' + credential,
      CredentialsTakenErrorObj.status,
    );
  }
}
