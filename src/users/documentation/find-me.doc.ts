import {
  ForbiddenErrorObj,
  InternalServerErrorObj,
  UnauthorizedErrorObj,
} from '@/util/api-error-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function FindMeDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Show all information of logged user. Permission required: ["find-me"]',
    }),
    ApiOkResponse({
      description: 'OK response',
      schema: {
        example: {
          id: 3,
          name: '[user employee]',
          email: null,
          registry: 'user3',
          password: '123',
          createdAt: '2023-11-24T20:25:40.817Z',
          updatedAt: null,
          role: 'Employee',
          permissions: [
            'find-all-products',
            'find-all-suppliers',
            'find-me',
            'find-product',
            'find-products-by-supplier',
            'find-supplier',
            'update-me',
          ],
        },
      },
    }),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
