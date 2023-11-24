import { NotFoundProductError } from '@/common/error/not-found-product.error';
import { Injectable } from '@nestjs/common';
import { ProductsService } from '../service/products.service';

@Injectable()
export class RemoveProductUseCase {
  constructor(private productsService: ProductsService) {}

  async execute(id: number) {
    const productExists = await this.productsService.findOne(id);
    if (!productExists) throw new NotFoundProductError();

    return await this.productsService.remove(id);
  }
}
