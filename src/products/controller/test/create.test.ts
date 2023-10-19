import { CreateProductDto } from '@/products/dto/create-product.dto';

export const createProductTest = () => {
  it('should validate fields', () => {});
  it('should validate business rules', () => {});
  it('should create product', createProduct);
};

const createProduct = async () => {
  const productMock: CreateProductDto = {
    supplierId: 1,
    name: 'name test',
    description: 'description test1',
    stock: 1,
    price: 1,
    discount: 1,
  };

  const newProduct = await global.__CONTROLLER__.create(productMock);
  expect(!!newProduct).toBe(true);
};
