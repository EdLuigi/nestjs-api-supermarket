import {
  AlreadyVerifiedEmailErrorObj,
  EmailNotSentErrorObj,
  InternalServerErrorObj,
  NotFoundEmailErrorObj,
} from '@/utils/api-error-responses';
import { CreatedResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';

export function ResendEmailTokenDoc() {
  return applyDecorators(
    ApiOperation({
      description: 'Resend account validation token by email',
    }),
    ApiParam({
      name: 'email',
      type: 'string',
      description: 'User email to resend token',
      allowEmptyValue: false,
    }),

    ApiCreatedResponse({
      description: CreatedResponseObj.description,
      schema: {
        example: {
          access_token: 'string',
        },
      },
    }),
    ApiResponse(AlreadyVerifiedEmailErrorObj),
    ApiResponse(NotFoundEmailErrorObj),
    ApiResponse({
      description:
        InternalServerErrorObj.description +
        ' | ' +
        EmailNotSentErrorObj.description,
      status: InternalServerErrorObj.status,
    }),
  );
}
