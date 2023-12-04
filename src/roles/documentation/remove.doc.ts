import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  ForeignKeyRoleErrorObj,
  InternalServerErrorObj,
  NotFoundRoleErrorObj,
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
        'Delete role by role id. Permission required: ["delete-role"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Role id to be deleted',
      allowEmptyValue: false,
    }),
    ApiOkResponse({
      description: 'OK response',
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(ForeignKeyRoleErrorObj),
    ApiResponse(NotFoundRoleErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
