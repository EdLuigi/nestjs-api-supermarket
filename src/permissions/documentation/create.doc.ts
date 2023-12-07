import {
  DuplicateKeyValueErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function CreateDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Create a permission. Permission required: ["create-permission"]',
    }),
    ApiOkResponse({
      description: 'Created response',
      schema: {
        example: {
          id: 37,
          name: 'permission test',
          description: 'description teste',
          createdAt: '2023-12-05T15:47:53.231Z',
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
