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
        'Show all products information. Permission required: ["find-all-products"]',
    }),

    ApiOkResponse({
      description: OkResponseObj.description,
      schema: {
        example: [
          {
            id: 1,
            supplierId: 2,
            name: 'Almôndegas de Carne com molho 500g',
            description: '',
            stock: 30,
            price: '25',
            discountPercentage: 0,
            createdAt: '2023-12-01T13:22:46.979Z',
            updatedAt: null,
          },
          {
            id: 2,
            supplierId: 3,
            name: 'Panettone Alpino Chocolate 500g',
            description: '',
            stock: 100,
            price: '35.99',
            discountPercentage: 0,
            createdAt: '2023-12-01T13:22:46.979Z',
            updatedAt: null,
          },
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
    ApiResponse(UnauthorizedErrorObj),
    ApiResponse(ForbiddenErrorObj),
    ApiResponse(InternalServerErrorObj),
  );
}
