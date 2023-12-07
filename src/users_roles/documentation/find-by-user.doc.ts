import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundUserErrorObj,
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

export function FindByUserDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Show user-role information by user id. Permission required: ["find-user-role-by-user-id"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'User id to search user-role',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: {
          id: 3,
          userId: 3,
          roleId: 3,
          createdAt: '2023-12-01T13:22:46.995Z',
          updatedAt: null,
        },
      },
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundUserErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
