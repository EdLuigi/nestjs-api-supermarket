import {
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

export function RemoveDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Delete product by product id. Permission required: ["delete-product"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Product id to be deleted',
      allowEmptyValue: false,
    }),

    ApiOkResponse(OkResponseObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundProductErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
