import {
  BadFormatRegistryErrorObj,
  CredentialsTakenErrorObj,
  InternalServerErrorObj,
} from '@/utils/api-error-responses';
import { CreatedResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SignupDevDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Register a new user without requesting email validation. Email will be verified by default',
    }),

    ApiCreatedResponse({
      description: CreatedResponseObj.description,
      schema: {
        example: {
          access_token: 'string',
        },
      },
    }),
    ApiResponse({
      description:
        BadFormatRegistryErrorObj.description +
        ' | ' +
        CredentialsTakenErrorObj.description,
      status: BadFormatRegistryErrorObj.status,
    }),
    ApiResponse(InternalServerErrorObj),
  );
}
