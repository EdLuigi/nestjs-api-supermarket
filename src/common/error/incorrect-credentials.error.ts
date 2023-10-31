import { HttpException, HttpStatus } from '@nestjs/common';

export class IncorrectCredentialsError extends HttpException {
  constructor() {
    super('Credentials incorrect', HttpStatus.BAD_REQUEST);
  }
}
