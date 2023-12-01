import { IncorrectCredentialsErrorObj } from '@/util/api-error-responses';
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
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInJlZ2lzdHJ5IjoidXNlcjFhIiwiaWF0IjoxNzAxNDU1NDA4LCJleHAiOjE3MDE0NTYzMDh9.9xsuK7wibEeFXkU-vLsVIGkogBLlaRddEcWKus0B1u4',
        },
      },
      status: HttpStatus.CREATED,
    }),
    ApiResponse({
      description: IncorrectCredentialsErrorObj.message,
      status: IncorrectCredentialsErrorObj.statusCode,
    }),
  );
}
