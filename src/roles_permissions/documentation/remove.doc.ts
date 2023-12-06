import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundRolePermissionErrorObj,
  UnauthorizedErrorObj,
} from '@/util/api-error-responses';
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
    ApiOkResponse({
      description: 'OK response',
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundRolePermissionErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
