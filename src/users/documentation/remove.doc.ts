import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundUserErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
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
      description: 'User id to be deleted',
      allowEmptyValue: false,
    }),
    ApiOkResponse({
      description: 'OK response',
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundUserErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
