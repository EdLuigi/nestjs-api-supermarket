import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedError extends HttpException {
  constructor() {
    super(
      `User must be logged in to access this feature`,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
