import { HttpException, HttpStatus } from '@nestjs/common';

export class UserInfoNotFoundError extends HttpException {
  constructor() {
    super(
      'Could not retrieve user info, something went wrong',
      HttpStatus.NOT_FOUND,
    );
  }
}
