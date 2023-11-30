import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenError extends HttpException {
  constructor() {
    super(
      `User does not have the required permissions`,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
