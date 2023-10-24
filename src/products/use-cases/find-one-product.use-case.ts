import { Injectable } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { BadFormatError } from '@/common/error/bad-format.error';

@Injectable()
export class FindOneProductUseCase {
  constructor(private productsService: ProductsService) {}

  async execute(id: number) {
    if (isNaN(id)) throw new BadFormatError('id');

    return await this.productsService.findOne(id);
  }
}
