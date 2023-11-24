import { ProductsService } from '@/products/service/products.service';
import { Module } from '@nestjs/common';
import { SuppliersController } from './controller/suppliers.controller';
import { SuppliersService } from './service/suppliers.service';
import { CreateSupplierUseCase } from './use-case/create-supplier.use-case';
import { FindAllSuppliersUseCase } from './use-case/find-all-suppliers.use-case';
import { FindOneSupplierUseCase } from './use-case/find-one-supplier.use-case';
import { RemoveSupplierUseCase } from './use-case/remove-supplier.use-case';
import { UpdateSupplierUseCase } from './use-case/update-supplier.use-case';

@Module({
  controllers: [SuppliersController],
  providers: [
    SuppliersService,
    ProductsService,
    CreateSupplierUseCase,
    FindAllSuppliersUseCase,
    FindOneSupplierUseCase,
    UpdateSupplierUseCase,
    RemoveSupplierUseCase,
  ],
})
export class SuppliersModule {}
