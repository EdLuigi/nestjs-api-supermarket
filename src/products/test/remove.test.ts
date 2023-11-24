import { NotFoundProductError } from '@/common/error/not-found-product.error';

export const removeProductTest = () => {
  // TEST: "id" should not exist, should throw "NotFoundProductError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should remove first product, no erros
  it('should remove first product', removeFirstProduct);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const id = '99999';
    await global.__CONTROLLER__.remove(+id);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundProductError());
  }
};

const removeFirstProduct = async () => {
  const products = await global.__CONTROLLER__.findAll();
  const firstProduct = products[0];

  await global.__CONTROLLER__.remove(firstProduct.id);
};
