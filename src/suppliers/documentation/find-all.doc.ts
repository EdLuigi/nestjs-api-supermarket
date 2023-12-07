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
        'Show all suppliers information. Permission required: ["find-all-suppliers"]',
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: [
          {
            id: 1,
            name: 'SEARA',
            companyName: 'SEARA ALIMENTOS LTDA',
            registry: '02.914.460/0052-09',
            createdAt: '2023-12-01T13:22:46.993Z',
            updatedAt: null,
          },
          {
            id: 2,
            name: 'SADIA',
            companyName: 'SADIA S.A.',
            registry: '20.730.099/0001-94',
            createdAt: '2023-12-01T13:22:46.993Z',
            updatedAt: null,
          },
          {
            id: 3,
            name: 'NESTLÉ',
            companyName: 'NESTLÉ BRASIL LTDA.',
            registry: '60.409.075/0001-52',
            createdAt: '2023-12-01T13:22:46.993Z',
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
