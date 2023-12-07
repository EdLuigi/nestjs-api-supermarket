import {
  ForbiddenErrorObj,
  InternalServerErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function FindAllDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Show all users information. Permission required: ["find-all-users"]',
    }),
    ApiOkResponse({
      description: 'OK response',
      schema: {
        example: [
          {
            id: 1,
            name: '[user admin]',
            email: null,
            registry: 'user1',
            createdAt: '2023-11-24T20:25:40.817Z',
            updatedAt: null,
          },
          {
            id: 2,
            name: '[user manager]',
            email: null,
            registry: 'user2',
            createdAt: '2023-11-24T20:25:40.817Z',
            updatedAt: null,
          },
          {
            id: 3,
            name: '[user employee]',
            email: null,
            registry: 'user3',
            createdAt: '2023-11-24T20:25:40.817Z',
            updatedAt: null,
          },
          {
            id: 4,
            name: '[user w/ no userRole]',
            email: null,
            registry: 'user4',
            createdAt: '2023-11-24T20:25:40.817Z',
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
