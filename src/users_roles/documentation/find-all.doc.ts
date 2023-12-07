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
        'Show all users-roles information. Permission required: ["find-all-users-roles"]',
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: [
          {
            id: 1,
            userId: 1,
            roleId: 1,
            createdAt: '2023-12-01T13:22:46.995Z',
            updatedAt: null,
          },
          {
            id: 2,
            userId: 2,
            roleId: 2,
            createdAt: '2023-12-01T13:22:46.995Z',
            updatedAt: null,
          },
          {
            id: 3,
            userId: 3,
            roleId: 3,
            createdAt: '2023-12-01T13:22:46.995Z',
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
