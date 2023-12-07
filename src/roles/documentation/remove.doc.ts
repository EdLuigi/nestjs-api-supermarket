import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  ForeignKeyRoleErrorObj,
  InternalServerErrorObj,
  NotFoundRoleErrorObj,
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
        'Delete role by role id. Permission required: ["delete-role"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Role id to be deleted',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
    }),
    ApiResponse({
      description:
        BadFormatIdErrorObj.description +
        ' | ' +
        ForeignKeyRoleErrorObj.description,
      status: BadFormatIdErrorObj.status,
    }),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundRoleErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
