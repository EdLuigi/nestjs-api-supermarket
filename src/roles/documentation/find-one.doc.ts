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
        'Show role information by role id. Permission required: ["find-role"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Role id to be searched',
      allowEmptyValue: false,
    }),
    ApiOkResponse({
      description: 'OK response',
      schema: {
        example: {
          id: 3,
          name: 'Employee',
          description: null,
          createdAt: '2023-12-01T13:22:46.990Z',
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
