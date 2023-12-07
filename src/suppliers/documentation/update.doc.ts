import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundSupplierErrorObj,
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
        'Update supplier information by supplier id. Permission required: ["update-supplier"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Supplier id to be updated',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: {
          id: 4,
          name: 'name updated',
          companyName: 'description updated',
          registry: '1',
          createdAt: '2023-12-01T18:30:42.074Z',
          updatedAt: '2023-12-07T20:00:39.804Z',
        },
      },
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundSupplierErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
