import {
  ForbiddenErrorObj,
  InternalServerErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
import { OkResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function FindAllDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Show all permissions information. Permission required: ["find-all-permissions"]',
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: [
          {
            id: 1,
            name: 'create-role',
            description: null,
            createdAt: '2023-12-01T13:22:46.976Z',
            updatedAt: null,
          },
          {
            id: 2,
            name: 'find-all-roles',
            description: null,
            createdAt: '2023-12-01T13:22:46.976Z',
            updatedAt: null,
          },
          {
            id: 3,
            name: 'find-role',
            description: null,
            createdAt: '2023-12-01T13:22:46.976Z',
            updatedAt: null,
          },
        ],
      },
    }),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
