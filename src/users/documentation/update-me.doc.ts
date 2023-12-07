import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
} from '@/utils/api-error-responses';
import { OkResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function UpdateMeDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Update logged user information. Permission required: ["update-me"]',
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
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
