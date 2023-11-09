import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundProductError } from '@/common/error/not-found-product.error';
import { Injectable } from '@nestjs/common';
import { ProductsService } from '../service/products.service';

@Injectable()
export class RemoveProductUseCase {
  constructor(private productsService: ProductsService) {}

  async execute(id: number) {
    if (!Number.isInteger(+id)) throw new BadFormatError('id');

    const productExists = await this.productsService.findOne(id);
    if (!productExists) throw new NotFoundProductError();

    return await this.productsService.remove(id);
  }
}
