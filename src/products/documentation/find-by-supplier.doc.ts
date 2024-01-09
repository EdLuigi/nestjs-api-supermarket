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

export function FindBySupplierDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Show product information by supplier id. Permission required: ["find-products-by-supplier"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Supplier id to search Product',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: [
          {
            id: 3,
            supplierId: 1,
            name: 'Pernil sem Osso Temperado com Limão e Ervas',
            description:
              'Corte suíno selecionado, já temperado com ervas finas e limão e embalado no saco assa fácil, o produto vai direto do freezer para o forno. Não é necessário descongelar nem retemperar, não suja o forno.',
            stock: 50,
            price: '50',
            discountPercentage: 25,
            createdAt: '2023-12-01T13:22:46.979Z',
            updatedAt: null,
          },
        ],
      },
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(NotFoundSupplierErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
