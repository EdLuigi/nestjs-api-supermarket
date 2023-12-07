import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundRoleErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
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
        'Update role information by role id. Permission required: ["update-role"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Role id to be updated',
      allowEmptyValue: false,
    }),
    ApiOkResponse({
      description: 'OK response',
      schema: {
        example: {
          id: 3,
          name: 'Employee',
          description: 'description updated',
          createdAt: '2023-12-01T13:22:46.990Z',
          updatedAt: '2023-12-04T14:47:17.081Z',
        },
      },
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundRoleErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
