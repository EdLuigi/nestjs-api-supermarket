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
        'Show permission information by permission id. Permission required: ["find-permission"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Permission id to be searched',
      allowEmptyValue: false,
    }),
    ApiOkResponse({
      description: 'OK response',
      schema: {
        example: {
          id: 1,
          name: 'create-role',
          description: null,
          createdAt: '2023-12-01T13:22:46.976Z',
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
