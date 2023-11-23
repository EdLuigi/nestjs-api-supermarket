import { NotFoundProductError } from '@/common/error/not-found-product.error';
import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsService } from '../service/products.service';

@Injectable()
export class UpdateProductUseCase {
  constructor(private productsService: ProductsService) {}

  async execute(id: number, productData: UpdateProductDto) {
    const productExists = await this.productsService.findOne(id);
    if (!productExists) throw new NotFoundProductError();

    return await this.productsService.update(id, productData);
  }
}
