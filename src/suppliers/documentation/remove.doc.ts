import {
  ForbiddenErrorObj,
  ForeignKeySupplierErrorObj,
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

export function RemoveDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Delete supplier by supplier id. Permission required: ["delete-supplier"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Supplier id to be deleted',
      allowEmptyValue: false,
    }),

    ApiOkResponse(OkResponseObj),
    ApiResponse(ForeignKeySupplierErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundSupplierErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
