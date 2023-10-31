import { HttpException, HttpStatus } from '@nestjs/common';

export class CredentialsTakenError extends HttpException {
  constructor() {
    super(`Credentials already taken`, HttpStatus.BAD_REQUEST);
  }
}
