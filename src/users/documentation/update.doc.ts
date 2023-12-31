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

export function UpdateDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Update user information by user id. Permission required: ["update-user"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'User id to be updated',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: {
          id: 3,
          name: 'name updated',
          email: 'email updated',
          registry: 'user3',
          createdAt: '2023-11-28T20:24:02.197Z',
          updatedAt: '2023-11-29T14:57:05.732Z',
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
