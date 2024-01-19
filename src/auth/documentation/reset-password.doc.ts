import {
  IncorrectCredentialsErrorObj,
  InternalServerErrorObj,
  NotFoundUserErrorObj,
} from '@/utils/api-error-responses';
import { OkResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';

export function ResetPasswordDoc() {
  return applyDecorators(
    ApiOperation({
      description: 'Reset account password by user id',
    }),
    ApiParam({
      name: 'id',
      type: 'string',
      description: 'User id to reset password',
      allowEmptyValue: false,
    }),

    ApiOkResponse(OkResponseObj),
    ApiResponse(IncorrectCredentialsErrorObj),
    ApiResponse(NotFoundUserErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
