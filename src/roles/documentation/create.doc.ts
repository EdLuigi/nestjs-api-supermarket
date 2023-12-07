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
      description: 'Create a role. Permission required: ["create-role"]',
    }),
    ApiOkResponse({
      description: 'Created response',
      schema: {
        example: {
          id: 4,
          name: 'test role',
          description: 'test role',
          createdAt: '2023-12-01T19:42:55.676Z',
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
