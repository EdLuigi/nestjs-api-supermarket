import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  NotFoundUserErrorObj,
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
        'Delete user by user id. Permission required: ["delete-user"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'User id to be deleted.',
      allowEmptyValue: false,
    }),
    ApiOkResponse({
      description: 'OK response',
    }),
    ApiResponse({
      description: BadFormatIdErrorObj.message,
      status: BadFormatIdErrorObj.statusCode,
    }),
    ApiResponse({
      description: UnauthorizedErrorObj.message,
      status: UnauthorizedErrorObj.statusCode,
    }),
    ApiResponse({
      description: ForbiddenErrorObj.message,
      status: ForbiddenErrorObj.statusCode,
    }),
    ApiResponse({
      description: NotFoundUserErrorObj.message,
      status: NotFoundUserErrorObj.statusCode,
    }),
  );
}
