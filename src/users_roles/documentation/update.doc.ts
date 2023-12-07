import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundRoleErrorObj,
  NotFoundUserErrorObj,
  NotFoundUserRoleErrorObj,
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
        'Update user-role information by user id. Permission required: ["update-user-role"]',
    }),
    ApiParam({
      name: 'userId',
      type: 'number',
      description: 'User id to update user-role',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: {
          id: 3,
          userId: 3,
          roleId: 2,
          createdAt: '2023-12-01T13:22:46.995Z',
          updatedAt: '2023-12-05T19:16:30.776Z',
        },
      },
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse({
      description:
        NotFoundUserErrorObj.description +
        ' | ' +
        NotFoundRoleErrorObj.description +
        ' | ' +
        NotFoundUserRoleErrorObj.description,
      status: NotFoundUserErrorObj.status,
    }),

    ApiResponse(InternalServerErrorObj),
  );
}
