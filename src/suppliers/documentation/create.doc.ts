import {
  DuplicateKeyValueErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
import { CreatedResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function CreateDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Create a supplier. Permission required: ["create-supplier"]',
    }),

    ApiCreatedResponse({
      description: CreatedResponseObj.description,
      schema: {
        example: {
          id: 5,
          name: '123',
          companyName: '123',
          registry: '12',
          createdAt: '2023-12-07T19:52:51.101Z',
          updatedAt: null,
        },
      },
    }),
    ApiResponse(DuplicateKeyValueErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
