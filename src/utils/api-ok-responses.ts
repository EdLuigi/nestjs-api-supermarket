import { HttpStatus } from '@nestjs/common';

export const OkResponseObj = {
  description: 'OK response',
  status: HttpStatus.OK,
};

export const CreatedResponseObj = {
  description: 'Created successfully',
  status: HttpStatus.CREATED,
};
