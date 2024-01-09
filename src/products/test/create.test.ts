import { NotFoundSupplierError } from '@/common/error/not-found-supplier.error';
import { CreateProductDto } from '@/products/dto/create-product.dto';

export const createProductTest = () => {
  // TEST: "supplierId" should not exist, should throw "NotFoundSupplierError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should create product, no errors
  it('should create product', createProduct);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const productMock: CreateProductDto = {
      supplierId: 0,
      name: 'name test',
      description: 'description test',
      stock: 1,
      price: 1,
      discountPercentage: 1,
    };
    await global.__CONTROLLER__.create(productMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundSupplierError());
  }
};

const createProduct = async () => {
  const productMock: CreateProductDto = {
    supplierId: 1,
    name: 'name test',
    description: 'description test1',
    stock: 1,
    price: 1,
    discountPercentage: 1,
  };

  const newProduct = await global.__CONTROLLER__.create(productMock);
  expect(!!newProduct).toBe(true);
};
