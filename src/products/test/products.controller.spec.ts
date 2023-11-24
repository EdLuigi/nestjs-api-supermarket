import { AppModule } from '@/app.module';
import { ProductsService } from '@/products/service/products.service';
import { CreateProductUseCase } from '@/products/use-case/create-product.use-case';
import { FindAllProductsUseCase } from '@/products/use-case/find-all-products.use-case';
import { FindBySupplierUseCase } from '@/products/use-case/find-by-supplier.use-case';
import { FindOneProductUseCase } from '@/products/use-case/find-one-product.use-case';
import { RemoveProductUseCase } from '@/products/use-case/remove-product.use-case';
import { UpdateProductUseCase } from '@/products/use-case/update-product.use-case';
import { SuppliersService } from '@/suppliers/service/suppliers.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../controller/products.controller';
import { createProductTest } from './create.test';
import { findAllProductsTest } from './find-all.test';
import { findBySupplierTest } from './find-by-supplier.test';
import { findOneProductTest } from './find-one.test';
import { removeProductTest } from './remove.test';
import { updateProductTest } from './update.test';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        CreateProductUseCase,
        FindAllProductsUseCase,
        FindOneProductUseCase,
        FindBySupplierUseCase,
        UpdateProductUseCase,
        RemoveProductUseCase,
        SuppliersService,
      ],
      imports: [AppModule],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);

    /* Define "global.__CONTROLLER__" as the current controller for testing*/
    global.__CONTROLLER__ = controller;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => createProductTest());
  describe('findAll()', () => findAllProductsTest());
  describe('findOne()', () => findOneProductTest());
  describe('findBySupplier()', () => findBySupplierTest());
  describe('update()', () => updateProductTest());
  describe('remove()', () => removeProductTest());
});
