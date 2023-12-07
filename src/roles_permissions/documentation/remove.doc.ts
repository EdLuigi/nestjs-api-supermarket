import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundRolePermissionErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
import { OkResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';

export function RemoveDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Delete role-permission by role-permission id. Permission required: ["delete-role-permission"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Role-Permission id to be deleted',
      allowEmptyValue: false,
    }),

    ApiOkResponse(OkResponseObj),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundRolePermissionErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
