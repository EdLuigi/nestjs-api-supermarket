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
        'Show user information by user id. Permission required: ["find-one"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'User id to be searched.',
      allowEmptyValue: false,
    }),
    ApiOkResponse({
      description: 'OK response',
      schema: {
        example: {
          id: 2,
          name: '[user manager]',
          email: null,
          registry: 'user2',
          createdAt: '2023-11-28T20:24:02.197Z',
          updatedAt: null,
        },
      },
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
      description: InternalServerErrorObj.message,
      status: InternalServerErrorObj.statusCode,
    }),
  );
}
