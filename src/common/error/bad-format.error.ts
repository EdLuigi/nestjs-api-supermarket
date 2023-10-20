import { HttpException, HttpStatus } from '@nestjs/common';

export class BadFormatError extends HttpException {
  constructor(msg: string) {
    super(`Variable '${msg}' is in a bad format`, HttpStatus.BAD_REQUEST);
  }
}
