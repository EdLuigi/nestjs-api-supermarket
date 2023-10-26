import { AppModule } from '@/app.module';
import { ProductsService } from '@/products/service/products.service';
import { SuppliersService } from '@/suppliers/service/suppliers.service';
import { CreateSupplierUseCase } from '@/suppliers/use-cases/create-supplier.use-case';
import { FindAllSuppliersUseCase } from '@/suppliers/use-cases/find-all-suppliers.use-case';
import { FindOneSupplierUseCase } from '@/suppliers/use-cases/find-one-supplier.use-case';
import { RemoveSupplierUseCase } from '@/suppliers/use-cases/remove-supplier.use-case';
import { UpdateSupplierUseCase } from '@/suppliers/use-cases/update-supplier.use-case';
import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersController } from '../controller/suppliers.controller';
import { createSupplierTest } from './create.test';
import { findAllSuppliersTest } from './find-all.test';
import { findOneSupplierTest } from './find-one.test';
import { removeSupplierTest } from './remove.test';
import { updateSupplierTest } from './update.test';

describe('SuppliersController', () => {
  let controller: SuppliersController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppliersController],
      providers: [
        SuppliersService,
        ProductsService,
        CreateSupplierUseCase,
        FindAllSuppliersUseCase,
        FindOneSupplierUseCase,
        UpdateSupplierUseCase,
        RemoveSupplierUseCase,
        SuppliersService,
      ],
      imports: [AppModule],
    }).compile();

    controller = module.get<SuppliersController>(SuppliersController);

    /* Define "global.__CONTROLLER__" as the current controller for testing*/
    global.__CONTROLLER__ = controller;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => createSupplierTest());
  describe('findAll()', () => findAllSuppliersTest());
  describe('findOne()', () => findOneSupplierTest());
  describe('update()', () => updateSupplierTest());
  describe('remove()', () => removeSupplierTest());
});
