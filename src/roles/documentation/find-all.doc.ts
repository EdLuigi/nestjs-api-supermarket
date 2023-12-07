import {
  ForbiddenErrorObj,
  InternalServerErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
import { OkResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function FindAllDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Show all roles information. Permission required: ["find-all-roles"]',
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: [
          {
            id: 1,
            name: 'Admin',
            description: null,
            createdAt: '2023-12-01T13:22:46.990Z',
            updatedAt: null,
          },
          {
            id: 2,
            name: 'Manager',
            description: null,
            createdAt: '2023-12-01T13:22:46.990Z',
            updatedAt: null,
          },
          {
            id: 3,
            name: 'Employee',
            description: null,
            createdAt: '2023-12-01T13:22:46.990Z',
            updatedAt: null,
          },
          {
            id: 4,
            name: 'test role',
            description: 'test role',
            createdAt: '2023-12-01T19:42:55.676Z',
            updatedAt: null,
          },
        ],
      },
    }),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
