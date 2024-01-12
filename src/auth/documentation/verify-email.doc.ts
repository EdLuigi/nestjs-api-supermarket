import {
  ExpiredTokenErrorObj,
  InternalServerErrorObj,
  NotFoundTokenErrorObj,
} from '@/utils/api-error-responses';
import { OkResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';

export function VerifyEmailDoc() {
  return applyDecorators(
    ApiOperation({
      description: 'Verify user email by email token',
    }),
    ApiParam({
      name: 'token',
      type: 'string',
      description: 'Email token to be verified',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: {
          access_token: 'string',
        },
      },
    }),
    ApiResponse(ExpiredTokenErrorObj),
    ApiResponse(NotFoundTokenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
