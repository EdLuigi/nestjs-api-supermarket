import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
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
        'Show user information by user id. Permission required: ["find-user"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'User id to be searched',
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
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
