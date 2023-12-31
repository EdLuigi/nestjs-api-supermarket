import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  ForeignKeyPermissionErrorObj,
  InternalServerErrorObj,
  NotFoundPermissionErrorObj,
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
        'Delete permission by permission id. Permission required: ["delete-permission"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Permission id to be deleted',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
    }),
    ApiResponse({
      description:
        BadFormatIdErrorObj.description +
        ' | ' +
        ForeignKeyPermissionErrorObj.description,
      status: BadFormatIdErrorObj.status,
    }),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundPermissionErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
