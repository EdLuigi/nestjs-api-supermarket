import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundPermissionErrorObj,
  UnauthorizedErrorObj,
} from '@/util/api-error-responses';
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
        'Update permission information by permission id. Permission required: ["update-permission"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Permission id to be updated',
      allowEmptyValue: false,
    }),
    ApiOkResponse({
      description: 'OK response',
      schema: {
        example: {
          id: 37,
          name: 'create-supplier',
          description: 'description updated',
          createdAt: '2023-12-01T13:22:46.976Z',
          updatedAt: '2023-12-05T16:03:16.943Z',
        },
      },
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundPermissionErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
