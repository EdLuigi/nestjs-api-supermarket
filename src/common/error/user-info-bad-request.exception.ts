import { HttpException, HttpStatus } from '@nestjs/common';

export class UserInfoBadRequestError extends HttpException {
  constructor() {
    super('User info in wrong format', HttpStatus.BAD_REQUEST);
  }
}
