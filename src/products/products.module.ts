import { SuppliersService } from '@/suppliers/service/suppliers.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './service/products.service';
import { CreateProductUseCase } from './use-case/create-product.use-case';
import { FindAllProductsUseCase } from './use-case/find-all-products.use-case';
import { FindBySupplierUseCase } from './use-case/find-by-supplier.use-case';
import { FindOneProductUseCase } from './use-case/find-one-product.use-case';
import { RemoveProductUseCase } from './use-case/remove-product.use-case';
import { UpdateProductUseCase } from './use-case/update-product.use-case';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    SuppliersService,
    CreateProductUseCase,
    FindAllProductsUseCase,
    FindOneProductUseCase,
    FindBySupplierUseCase,
    UpdateProductUseCase,
    RemoveProductUseCase,
  ],
})
export class ProductsModule {}
