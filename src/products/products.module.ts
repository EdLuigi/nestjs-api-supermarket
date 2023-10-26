import { SuppliersService } from '@/suppliers/service/suppliers.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './service/products.service';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { FindAllProductsUseCase } from './use-cases/find-all-products.use-case';
import { FindBySupplierUseCase } from './use-cases/find-by-supplier.use-case';
import { FindOneProductUseCase } from './use-cases/find-one-product.use-case';
import { RemoveProductUseCase } from './use-cases/remove-product.use-case';
import { UpdateProductUseCase } from './use-cases/update-product.use-case';

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
