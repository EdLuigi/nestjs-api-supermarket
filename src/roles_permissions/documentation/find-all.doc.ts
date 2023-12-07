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
        'Show all roles-permissions information. Permission required: ["find-all-roles-permissions"]',
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: [
          {
            id: 1,
            roleId: 1,
            permissionId: 1,
            createdAt: '2023-12-01T13:22:46.988Z',
            updatedAt: null,
          },
          {
            id: 2,
            roleId: 1,
            permissionId: 2,
            createdAt: '2023-12-01T13:22:46.988Z',
            updatedAt: null,
          },
          {
            id: 3,
            roleId: 1,
            permissionId: 3,
            createdAt: '2023-12-01T13:22:46.988Z',
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
