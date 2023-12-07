import {
  ForbiddenErrorObj,
  InternalServerErrorObj,
  NotFoundSupplierErrorObj,
  UnauthorizedErrorObj,
} from '@/utils/api-error-responses';
import { CreatedResponseObj } from '@/utils/api-ok-responses';
import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function CreateDoc() {
  return applyDecorators(
    ApiOperation({
      description: 'Create a product. Permission required: ["create-product"]',
    }),

    ApiCreatedResponse({
      description: CreatedResponseObj.description,
      schema: {
        example: {
          id: 4,
          supplierId: 3,
          name: 'name test',
          description: 'description test',
          stock: 0,
          price: '10.55',
          discount_percentage: 0,
          createdAt: '2023-12-07T20:23:15.657Z',
          updatedAt: null,
        },
      },
    }),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundSupplierErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
