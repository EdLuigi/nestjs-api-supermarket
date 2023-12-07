import {
  CredentialsTakenErrorObj,
  InternalServerErrorObj,
} from '@/utils/api-error-responses';
import { HttpStatus, applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SignupDoc() {
  return applyDecorators(
    ApiOperation({
      description: 'Register a new user',
    }),
    ApiResponse({
      description: 'Created response',
      schema: {
        example: {
          access_token: 'string',
        },
      },
      status: HttpStatus.CREATED,
    }),
    ApiResponse(CredentialsTakenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
