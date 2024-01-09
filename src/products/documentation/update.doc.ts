import {
  BadFormatIdErrorObj,
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundProductErrorObj,
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
        'Update product information by product id. Permission required: ["update-product"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Product id to be updated',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: {
          id: 5,
          supplierId: 3,
          name: 'name test',
          description: 'description updated',
          stock: 1,
          price: '1.25',
          discountPercentage: 50,
          createdAt: '2023-12-07T20:43:29.559Z',
          updatedAt: '2023-12-07T20:44:32.150Z',
        },
      },
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundProductErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
