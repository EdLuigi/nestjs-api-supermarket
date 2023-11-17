import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedError extends HttpException {
  constructor() {
    super(
      `User does not have the required permissions`,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
