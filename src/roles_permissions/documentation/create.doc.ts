import {
  DuplicateKeyValueErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundPermissionErrorObj,
  NotFoundRoleErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
import { CreatedResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function CreateDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Create a role-permission. Permission required: ["create-role-permission"]',
    }),

    ApiCreatedResponse({
      description: CreatedResponseObj.description,
      schema: {
        example: {
          id: 52,
          roleId: 1,
          permissionId: 38,
          createdAt: '2023-12-06T19:22:59.909Z',
          updatedAt: null,
        },
      },
    }),
    ApiResponse(DuplicateKeyValueErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse({
      description:
        NotFoundPermissionErrorObj.description +
        ' | ' +
        NotFoundRoleErrorObj.description,
      status: NotFoundPermissionErrorObj.status,
    }),
    ApiResponse(InternalServerErrorObj),
  );
}
