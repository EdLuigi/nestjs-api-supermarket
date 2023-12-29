import {
  IncorrectCredentialsErrorObj,
  InternalServerErrorObj,
} from '@/utils/api-error-responses';
import { CreatedResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SigninDoc() {
  return applyDecorators(
    ApiOperation({
      description: 'Signin to the application',
    }),

    ApiCreatedResponse({
      description: CreatedResponseObj.description,
      schema: {
        example: {
          access_token: 'string',
        },
      },
    }),
    ApiResponse(IncorrectCredentialsErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
