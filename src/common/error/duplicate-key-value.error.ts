import { HttpException, HttpStatus } from '@nestjs/common';

export class DuplicateKeyValueError extends HttpException {
  constructor(credential: string) {
    super(
      `Key value '${credential}' was already created`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
