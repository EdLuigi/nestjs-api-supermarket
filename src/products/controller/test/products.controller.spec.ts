import { AppModule } from '@/app.module';
import { ProductsService } from '@/products/service/products.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../products.controller';
import { createProductTest } from './create.test';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
      imports: [AppModule],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    global.__CONTROLLER__ = controller;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => createProductTest());

  // describe('findAll()', () => {
  //   it('should validate fields', async () => {});
  //   it('should validate business rules', async () => {});
  //   it('should create product', async () => {});
  // });
  // describe('findOne()', () => {
  //   it('should validate fields', async () => {});
  //   it('should validate business rules', async () => {});
  //   it('should create product', async () => {});
  // });
  // describe('findBySupplier()', () => {
  //   it('should validate fields', async () => {});
  //   it('should validate business rules', async () => {});
  //   it('should create product', async () => {});
  // });
  // describe('update()', () => {
  //   it('should validate fields', async () => {});
  //   it('should validate business rules', async () => {});
  //   it('should create product', async () => {});
  // });
  // describe('remove()', () => {
  //   it('should validate fields', async () => {});
  //   it('should validate business rules', async () => {});
  //   it('should create product', async () => {});
  // });
});
