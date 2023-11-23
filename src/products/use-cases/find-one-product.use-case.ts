import { Injectable } from '@nestjs/common';
import { ProductsService } from '../service/products.service';

@Injectable()
export class FindOneProductUseCase {
  constructor(private productsService: ProductsService) {}

  async execute(id: number) {
    return await this.productsService.findOne(id);
  }
}
