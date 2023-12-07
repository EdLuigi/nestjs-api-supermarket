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

export function FindOneDoc() {
  return applyDecorators(
    ApiOperation({
      description:
        'Show product information by product id. Permission required: ["find-product"]',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Product id to be searched',
      allowEmptyValue: false,
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: {
          id: 3,
          supplierId: 1,
          name: 'Pernil sem Osso Temperado com Limão e Ervas',
          description:
            'Corte suíno selecionado, já temperado com ervas finas e limão e embalado no saco assa fácil, o produto vai direto do freezer para o forno. Não é necessário descongelar nem retemperar, não suja o forno.',
          stock: 50,
          price: '50',
          discount_percentage: 25,
          createdAt: '2023-12-01T13:22:46.979Z',
          updatedAt: null,
        },
      },
    }),
    ApiResponse(BadFormatIdErrorObj),
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
