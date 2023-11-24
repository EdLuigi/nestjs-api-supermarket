import { Injectable } from '@nestjs/common';
import { ProductsService } from '../service/products.service';

@Injectable()
export class FindAllProductsUseCase {
  constructor(private productsService: ProductsService) {}

  async execute() {
    return await this.productsService.findAll();
  }
}
