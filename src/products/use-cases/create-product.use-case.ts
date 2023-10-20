import { NotFoundSupplierError } from '@/common/error/not-found-supplier.error';
import { SuppliersService } from '@/suppliers/service/suppliers.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsService } from '../service/products.service';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private productsService: ProductsService,
    private suppliersService: SuppliersService,
  ) {}

  async execute(productData: CreateProductDto) {
    const supplierExists = await this.suppliersService.findOne(
      productData.supplierId,
    );
    if (!supplierExists) throw new NotFoundSupplierError();

    return await this.productsService.create(productData);
  }
}
