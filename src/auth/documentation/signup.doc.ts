import {
  BadFormatRegistryErrorObj,
  CredentialsTakenErrorObj,
  EmailNotSentErrorObj,
  InternalServerErrorObj,
} from '@/utils/api-error-responses';
import { CreatedResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SignupDoc() {
  return applyDecorators(
    ApiOperation({
      description: 'Register a new user and send account validation email',
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
    ApiResponse({
      description:
        InternalServerErrorObj.description +
        ' | ' +
        EmailNotSentErrorObj.description,
      status: InternalServerErrorObj.status,
    }),
  );
}
