import {
  IncorrectCredentialsErrorObj,
  InternalServerErrorObj,
} from '@/util/api-error-responses';
import { HttpStatus, applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SigninDoc() {
  return applyDecorators(
    ApiOperation({
      description: 'Signin to the application',
    }),
    ApiResponse({
      description: 'CREATED response',
      schema: {
        example: {
          access_token: 'string',
        },
      },
      status: HttpStatus.CREATED,
    }),
    ApiResponse(IncorrectCredentialsErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
