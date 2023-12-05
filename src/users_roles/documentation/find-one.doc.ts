import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  UnauthorizedErrorObj,
} from '@/util/api-error-responses';
import { applyDecorators } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';

export function FindOneDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Show user-role information by user-role id. Permission required: ["find-user-role"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'User-role id to be searched',
      allowEmptyValue: false,
    }),
    ApiOkResponse({
      description: 'OK response',
      schema: {
        example: {
          id: 2,
          userId: 2,
          roleId: 2,
          createdAt: '2023-12-01T13:22:46.995Z',
          updatedAt: null,
        },
      },
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
