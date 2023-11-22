import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundProductError } from '@/common/error/not-found-product.error';
import { UpdateProductDto } from '@/products/dto/update-product.dto';

const productMock: UpdateProductDto = {
  description: 'description updated',
  stock: 2,
  price: 2,
  discount: 2,
};

export const updateProductTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: "id" should not exist, should throw "NotFoundProductError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should update last product, no errors
  it('should update last product', updateLastProduct);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const id_WRONG = 'a';
    await global.__CONTROLLER__.update(id_WRONG, productMock);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('id'));
  }
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const id = '99999';
    await global.__CONTROLLER__.update(id, productMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundProductError());
  }
};

const updateLastProduct = async () => {
  const products = await global.__CONTROLLER__.findAll();
  const lastProduct = products[products.length - 1];

  const updatedProduct = await global.__CONTROLLER__.update(
    lastProduct.id,
    productMock,
  );
  expect(!!updatedProduct).toBe(true);
};
